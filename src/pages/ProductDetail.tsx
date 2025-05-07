import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import ProductList from '../components/products/ProductList';
import Badge from '../components/ui/Badge';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  // If product not found, redirect to menu
  useEffect(() => {
    if (!product && id) {
      navigate('/menu');
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return null;
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Provide feedback that product was added
    // Could add a toast notification here
  };
  
  const increaseQuantity = () => {
    setQuantity(q => Math.min(q + 1, 10));
  };
  
  const decreaseQuantity = () => {
    setQuantity(q => Math.max(q - 1, 1));
  };
  
  // Get similar products (same category, excluding current product)
  const similarProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-600 hover:text-orange-500 mb-6"
        >
          <ChevronLeft size={20} />
          <span>Kembali</span>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <div>
              <div className="flex items-center mb-2">
                <Badge className="capitalize">{product.category}</Badge>
                {product.popular && (
                  <Badge variant="warning" className="ml-2">Populer</Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl text-orange-500 font-semibold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 mb-6">{product.description}</p>
            </div>
            
            {/* Ingredients */}
            {product.ingredients && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Bahan-bahan:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-orange-500 mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Quantity and Add to Cart */}
            <div className="mt-auto">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-gray-700">Jumlah:</span>
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleAddToCart}
                  className="flex items-center justify-center"
                >
                  <ShoppingBag size={20} className="mr-2" />
                  Tambahkan Ke Keranjang
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  fullWidth
                  onClick={() => navigate('/cart')}
                >
                  View Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Kamu Mungkin Juga Suka</h2>
            <ProductList products={similarProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;