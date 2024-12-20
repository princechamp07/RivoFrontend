import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import ProductGrid from './ProductGrid'
import axios from 'axios';
import AddProductForm from './AddProductForm';

const Ecommerce = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from the API
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('/api/v1/product');
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }, []);
  
    // Add a new product
    const addProduct = async (product) => {
      try {
        const response = await axios.post('/api/v1/product', product);
        setProducts([...products, response.data]);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    };
  
    // Delete a product
    const deleteProduct = async (id) => {
      try {
        await axios.delete(`/api/v1/product/${id}`);
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };
  
    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl font-semibold mb-6">Product</h1>
          <AddProductForm addProduct={addProduct} />
          <ProductGrid products={products} deleteProduct={deleteProduct} />
        </main>
      </div>
    );
  };

export default Ecommerce