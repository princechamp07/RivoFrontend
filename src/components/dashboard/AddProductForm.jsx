import React, { useState } from 'react';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [url, setUrl] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !price || isNaN(price) || parseFloat(price) <= 0) {
      setError('Please enter a valid product name and price.');
      setSuccess(false);
      return;
    }

    const newProduct = {
      name,
      price: parseFloat(price),
      oldPrice: oldPrice ? parseFloat(oldPrice) : null,
      url: url.trim(),
      isNew,
    };

    // Retrieve existing products from localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product to the list
    const updatedProducts = [...existingProducts, newProduct];

    // Save back to localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Reset form fields
    setName('');
    setPrice('');
    setOldPrice('');
    setUrl('');
    setIsNew(false);
    setError('');
    setSuccess(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 bg-white rounded-lg shadow-md"
    >
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">Product added successfully!</p>}

      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="productName">
          Product Name
        </label>
        <input
          id="productName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="price">
          Price
        </label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
          min="0"
          step="0.01"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="oldPrice">
          Old Price
        </label>
        <input
          id="oldPrice"
          type="number"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          className="w-full p-2 border rounded"
          min="0"
          step="0.01"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="url">
          Image URL
        </label>
        <input
          id="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          id="isNew"
          type="checkbox"
          checked={isNew}
          onChange={(e) => setIsNew(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="isNew" className="text-gray-700">
          New Product
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
