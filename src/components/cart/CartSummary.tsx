import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

// Fungsi format harga Rupiah
const formatRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};

interface CartSummaryProps {
  showCheckoutButton?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ showCheckoutButton = true }) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  
  const subtotal = cart.totalPrice;
  const deliveryFee = subtotal > 0 ? 4.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + tax;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-base text-gray-900">
          <p>Subtotal</p>
          <p>{formatRupiah(subtotal)}</p> {/* Format Subtotal dengan Rupiah */}
        </div>

        <div className="flex justify-between text-base text-gray-900">
          <p>Delivery Fee</p>
          <p>{formatRupiah(deliveryFee)}</p> {/* Format Delivery Fee dengan Rupiah */}
        </div>

        <div className="flex justify-between text-base text-gray-900">
          <p>Tax (8%)</p>
          <p>{formatRupiah(tax)}</p> {/* Format Tax dengan Rupiah */}
        </div>

        <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-900">
          <p>Total</p>
          <p>{formatRupiah(total)}</p> {/* Format Total dengan Rupiah */}
        </div>
      </div>

      {showCheckoutButton && (
        <div className="mt-6">
          <Button
            variant="primary"
            fullWidth
            size="lg"
            onClick={handleCheckout}
            disabled={cart.items.length === 0}
          >
            Proceed to Checkout
          </Button>

          <div className="mt-4 text-center">
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/menu')}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
