import React from 'react';

const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <div className="h-40 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden mb-4">
        {product.url ? (
          <img src={product.url} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">Tshirt</p>
        <div className="mt-2 flex items-center space-x-2">
          {product.oldPrice && (
            <span className="text-gray-400 line-through">${product.oldPrice}</span>
          )}
          <span className="text-blue-500 font-semibold">${product.price}</span>
        </div>
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
        )}
        <button
          onClick={() => deleteProduct(product.id)}
          className="mt-4 bg-red-500 text-white py-1 px-2 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
