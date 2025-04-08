import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }, []);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Expensive calculation result: {expensiveCalculation}</p>
      <p>Button clicked: {count} times</p>
      <button onClick={handleClick}>Increment</button>
      <div className="mt-4">
        <Link to="/about" className="text-blue-600 underline">Go to About</Link><br />
        <Link to="/products" className="text-blue-600 underline">Go to Products</Link>
      </div>
    </div>
  );
};

export default Home;
