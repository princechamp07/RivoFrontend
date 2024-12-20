import React, { useState } from 'react';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('S');
  const [price, setPrice] = useState(899.00);
  const discount = 0.1;
  const deliveryFee = 3.99;

  // Calculate discount and total price based on quantity
  const discountedPrice = price * quantity * (1 - discount);
  const total = discountedPrice + deliveryFee;

  // Handlers
  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increase' ? prev + 1 : prev > 1 ? prev - 1 : prev));
  };

  const handleColorSelect = (color) => setSelectedColor(color);
  const handleSizeSelect = (size) => setSelectedSize(size);

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-6">
      
      {/* Product Details */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
        <div className="flex flex-col md:flex-row gap-4">
          
          <div className="w-full md:w-1/3">
            <img src="https://via.placeholder.com/150" alt="Product" className="rounded-lg" />
          </div>

          <div className="flex flex-col w-full md:w-2/3">
            <h2 className="text-2xl font-semibold">New Relaxed Fit Sweatshirt Vol. III</h2>
            <div className="flex items-center text-yellow-500 my-2">
              <span className="text-lg">★ ★ ★ ★ ☆</span>
              <span className="ml-2 text-gray-600">(4.5) 623 reviews</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-4">${price.toFixed(2)}</p>
            
            {/* Color Selection */}
            <div className="flex gap-4 mb-4">
              <div>
                <p className="font-medium">Select Color</p>
                <div className="flex gap-2 mt-2">
                  {['Black', 'Gray', 'Green', 'Blue', 'Red'].map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={`w-8 h-8 rounded-full ${
                        selectedColor === color.toLowerCase() ? 'ring-2 ring-blue-500' : ''
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <p className="font-medium">Select Size</p>
                <div className="flex gap-2 mt-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`border px-3 py-1 rounded-lg ${
                        selectedSize === size ? 'bg-gray-300' : ''
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700">Top in sweatshirt fabric made from a cotton blend...</p>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700">Quantity</p>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange('decrease')}
              className="px-3 py-1 bg-gray-200 rounded-lg"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => handleQuantityChange('increase')}
              className="px-3 py-1 bg-gray-200 rounded-lg"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700">Color</p>
          <p>{selectedColor}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700">Size</p>
          <p>{selectedSize}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700">Price</p>
          <p>${(price * quantity).toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700">Discount</p>
          <p>{discount * 100}% (${(price * quantity * discount).toFixed(2)})</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-700">Delivery</p>
          <p>${deliveryFee}</p>
        </div>

        <hr className="my-4" />

        <div className="flex items-center justify-between mb-4 font-bold text-lg">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">Buy Now</button>
        <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg mt-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default Cart;
