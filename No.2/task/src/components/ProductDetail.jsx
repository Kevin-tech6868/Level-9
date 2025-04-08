// components/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id.toString() === id); // string match for URL param

  if (!product) {
    return (
      <div className="text-red-600 text-center mt-10 text-2xl">Product not found.</div>
    );
  }

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">{product.name}</h1>
        <p className="text-gray-700 mb-3">{product.description}</p>
        <p className="text-green-600 text-xl font-semibold mb-4">{product.price}</p>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover rounded"
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
