import React from 'react';
import { IProduct } from '../intefaces/product';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, product_brand: brand } = product;

  return (
    <div className="m-2 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img
        src="./globe-logo.png"
        alt="Product Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-lg font-medium text-indigo-600">Rs. {price}</p>
        <p className="mt-1 text-sm text-gray-500">{brand.name}</p>
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700">
            Add to Cart
          </button>
          <button className="flex-1 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
