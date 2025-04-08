import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /products */}
        <Route path="/" element={<Navigate to="/products" replace />} />

        {/* Product routes */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Optional 404 route */}
        <Route path="*" element={<div className="text-center text-red-500 mt-10 text-2xl">Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;

