import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      // Replace with your actual login API request
      const response = await fakeLoginApi(email, password);
      setUser(response.user);

      if (response.user.role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext in other components
export const useAuth = () => useContext(AuthContext);

// Fake API function for demonstration
const fakeLoginApi = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          email,
          role: email === 'admin@example.com' ? 'admin' : 'user',
        },
      });
    }, 1000);
  });
};
