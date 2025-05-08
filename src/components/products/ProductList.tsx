import React, { useState, useEffect } from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  category?: string;
  searchTerm?: string;
  showLoadMore?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  category = 'all', 
  searchTerm = '',
  showLoadMore = false 
}) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [displayCount, setDisplayCount] = useState(8);
  
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // Limit the number of visible products
    setVisibleProducts(filtered.slice(0, displayCount));
  }, [products, category, searchTerm, displayCount]);
  
  const loadMore = () => {
    setDisplayCount(prevCount => prevCount + 8);
  };
  
  const hasMore = visibleProducts.length < products.length && showLoadMore;

  if (visibleProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-700">No products found</h3>
        <p className="text-gray-500 mt-2">Try changing your filters or search term</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={loadMore}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;