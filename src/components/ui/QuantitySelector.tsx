import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}) => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 focus:outline-none"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="mx-3 w-6 text-center font-medium">{quantity}</span>
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 focus:outline-none"
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;