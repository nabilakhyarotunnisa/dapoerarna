<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Midtrans\Config;
use Midtrans\Snap;

class OrderController extends Controller
{
    public function __construct()
    {
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = true;
        Config::$is3ds = true;
    }

    public function store(Request $request)
    {
        $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
            'customer_name' => 'required|string',
            'customer_email' => 'required|email',
            'customer_phone' => 'required|string',
            'delivery_address' => 'required|string',
            'delivery_city' => 'required|string',
            'delivery_zip' => 'required|string',
        ]);

        $order = new Order();
        $order->order_number = 'ORD-' . strtoupper(Str::random(10));
        $order->customer_name = $request->customer_name;
        $order->customer_email = $request->customer_email;
        $order->customer_phone = $request->customer_phone;
        $order->delivery_address = $request->delivery_address;
        $order->delivery_city = $request->delivery_city;
        $order->delivery_zip = $request->delivery_zip;
        $order->status = 'pending';
        $order->payment_status = 'pending';
        
        $totalAmount = 0;
        $items = [];

        foreach ($request->items as $item) {
            $product = Product::find($item['id']);
            $subtotal = $product->price * $item['quantity'];
            $totalAmount += $subtotal;

            $items[] = [
                'product_id' => $product->id,
                'quantity' => $item['quantity'],
                'price' => $product->price,
                'subtotal' => $subtotal
            ];
        }

        $order->total_amount = $totalAmount;
        $order->save();

        foreach ($items as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
                'subtotal' => $item['subtotal']
            ]);
        }

        $payload = [
            'transaction_details' => [
                'order_id' => $order->order_number,
                'gross_amount' => (int) ($totalAmount * 100)
            ],
            'customer_details' => [
                'first_name' => $request->customer_name,
                'email' => $request->customer_email,
                'phone' => $request->customer_phone
            ]
        ];

        try {
            $snapToken = Snap::getSnapToken($payload);
            
            $order->midtrans_transaction_id = $snapToken;
            $order->save();

            return response()->json([
                'snap_token' => $snapToken,
                'order' => $order
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function handleCallback(Request $request)
    {
        $payload = $request->all();
        
        $orderId = $payload['order_id'];
        $transactionStatus = $payload['transaction_status'];
        $fraudStatus = $payload['fraud_status'];

        $order = Order::where('order_number', $orderId)->firstOrFail();

        if ($transactionStatus == 'capture') {
            if ($fraudStatus == 'challenge') {
                $order->payment_status = 'challenge';
            } else if ($fraudStatus == 'accept') {
                $order->payment_status = 'success';
                $order->status = 'processing';
            }
        } else if ($transactionStatus == 'settlement') {
            $order->payment_status = 'success';
            $order->status = 'processing';
        } else if ($transactionStatus == 'cancel' || $transactionStatus == 'deny' || $transactionStatus == 'expire') {
            $order->payment_status = 'failed';
            $order->status = 'cancelled';
        } else if ($transactionStatus == 'pending') {
            $order->payment_status = 'pending';
        }

        $order->save();

        return response()->json(['success' => true]);
    }
}