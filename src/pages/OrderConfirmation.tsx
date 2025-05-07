import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = React.useMemo(() => {
    return `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  }, []);
  
  // Generate a random delivery time between 30-45 minutes
  const deliveryTime = React.useMemo(() => {
    return Math.floor(30 + Math.random() * 15);
  }, []);
  
  // Redirect to home if page is refreshed
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('redirectToHome', 'true');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  useEffect(() => {
    const shouldRedirect = localStorage.getItem('redirectToHome');
    
    if (shouldRedirect === 'true') {
      localStorage.removeItem('redirectToHome');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Pesanan Dikonfirmasi!</h1>
          
          <p className="text-lg text-gray-700 mb-6">
          Terima kasih atas pesanan Anda. Kami telah menerima permintaan Anda dan sedang menyiapkan makanan lezat Anda.
          </p>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <div className="mb-4 pb-4 border-b border-orange-100">
              <p className="text-sm text-gray-500">Nomor Pesanan</p>
              <p className="text-xl font-semibold">{orderNumber}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Estimasi Waktu Pengiriman</p>
              <p className="text-xl font-semibold">{deliveryTime} minutes</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
          Email konfirmasi telah dikirim ke alamat email Anda beserta rincian pesanan.
          </p>
          
          <div className="space-y-4">
            <Button
              variant="primary"
              fullWidth
              size="lg"
              onClick={() => navigate('/menu')}
            >
              Pesan Lebih Banyak Makanan
            </Button>
            
            <Button
              variant="outline"
              fullWidth
              onClick={() => navigate('/')}
            >
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;