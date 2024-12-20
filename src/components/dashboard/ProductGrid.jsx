import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, deleteProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
};

export default ProductGrid;
