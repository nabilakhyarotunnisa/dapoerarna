import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

// Fungsi format harga Rupiah
const formatRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Adding to cart:", product);
    addToCart(product);
  };  

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        {product.popular && (
          <div className="absolute top-2 right-2">
            <Badge variant="warning">Popular</Badge>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="text-white font-medium">
            {/* Format harga sebagai Rupiah */}
            {formatRupiah(product.price)}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <Badge className="capitalize">{product.category}</Badge>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={handleAddToCart} // Menambahkan ke keranjang
            className="flex items-center space-x-1"
          >
            <ShoppingBag size={16} />
            <span>Tambah</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
