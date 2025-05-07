import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

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
          <p>${subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between text-base text-gray-900">
          <p>Delivery Fee</p>
          <p>${deliveryFee.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between text-base text-gray-900">
          <p>Tax (8%)</p>
          <p>${tax.toFixed(2)}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-900">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
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