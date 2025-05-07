import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

declare global {
  interface Window {
    snap: any;
  }
}

interface MidtransPaymentProps {
  onSuccess?: () => void;
  onPending?: () => void;
  onError?: () => void;
  onClose?: () => void;
}

const MidtransPayment: React.FC<MidtransPaymentProps> = ({
  onSuccess,
  onPending,
  onError,
  onClose,
}) => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute('data-client-key', import.meta.env.VITE_MIDTRANS_CLIENT_KEY || '');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      // This would normally come from your backend
      const transactionToken = 'TRANSACTION-TOKEN-FROM-BACKEND';
      
      window.snap.pay(transactionToken, {
        onSuccess: (result: any) => {
          console.log('Payment success:', result);
          clearCart();
          onSuccess?.();
          navigate('/order-confirmation');
        },
        onPending: (result: any) => {
          console.log('Payment pending:', result);
          onPending?.();
        },
        onError: (result: any) => {
          console.log('Payment error:', result);
          onError?.();
        },
        onClose: () => {
          console.log('Customer closed the payment popup without completing payment');
          onClose?.();
        },
      });
    } catch (error) {
      console.error('Error initiating Midtrans payment:', error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Pay with Midtrans
    </button>
  );
};

export default MidtransPayment;