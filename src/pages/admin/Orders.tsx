import React, { useState, useEffect } from 'react';
import { Clock, Package, Truck, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

interface Order {
  id: number;
  order_number: string;
  customer_name: string;
  total_amount: number;
  status: string;
  created_at: string;
  tracking: Array<{
    status: string;
    description: string;
    created_at: string;
  }>;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/admin/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: number, status: string) => {
    try {
      const response = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      const updatedOrder = await response.json();
      setOrders(orders.map(order => 
        order.id === orderId ? updatedOrder : order
      ));
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-500" />;
      case 'processing':
        return <Package className="text-blue-500" />;
      case 'shipping':
        return <Truck className="text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="text-green-500" />;
      default:
        return <Clock className="text-gray-500" />;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <div className="grid gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{order.order_number}</h3>
                <p className="text-gray-600">{order.customer_name}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">${order.total_amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  {new Date(order.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <span className="flex items-center">
                {getStatusIcon(order.status)}
                <span className="ml-2 font-medium capitalize">{order.status}</span>
              </span>
            </div>

            <div className="space-y-2">
              {['processing', 'shipping', 'delivered'].map((status) => (
                <Button
                  key={status}
                  variant={order.status === status ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => updateOrderStatus(order.id, status)}
                  disabled={order.status === status}
                  className="mr-2"
                >
                  Mark as {status}
                </Button>
              ))}
            </div>

            {order.tracking.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium mb-2">Tracking History</h4>
                <div className="space-y-2">
                  {order.tracking.map((track, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <div className="w-24 flex-shrink-0 text-gray-500">
                        {new Date(track.created_at).toLocaleTimeString()}
                      </div>
                      <div>
                        <span className="font-medium capitalize">{track.status}</span>
                        <span className="text-gray-600 ml-2">{track.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;