import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <Link to="/login" className="text-blue-500 underline">Go to Login</Link>
    </div>
  );
};

export default Home;
