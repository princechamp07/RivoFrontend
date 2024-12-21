import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by email
    const user = users.find((user) => user.email === email);

    if (!user) {
      setError('No account found with this email.');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password. Please try again.');
      return;
    }

    alert('Login successful!');
    navigate('/dashboard'); // Replace with your dashboard route
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center font-sans"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 185, 0, 0.7), rgba(255, 185, 0, 0.3)), url('/pngwing.com.png')`,
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg p-8 shadow-lg mx-4">
        <div className="text-center text-4xl font-extrabold text-yellow-700 mb-8">
          RIVO
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-1">
          EXISTING MEMBER
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">Welcome Back!</p>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label className="text-sm mb-2 block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-500 border border-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm mb-2 block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-yellow-700 rounded-lg text-white font-semibold hover:bg-yellow-800 focus:outline-none"
          >
            Continue
          </button>
        </form>

        <p className="text-center text-gray-500 my-4">OR</p>

        <div className="flex justify-center space-x-6 text-2xl text-gray-600">
          <FaGoogle className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaApple className="cursor-pointer" />
        </div>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{' '}
          <span className="text-yellow-600 cursor-pointer hover:underline">
            <Link to="RivoFrontend/signup">Register Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
