import React, { useEffect, useState } from 'react';
import LargeList from './LargeList';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div >
      <h1 >Counter: {counter}</h1>
      <LargeList items={generateItems()} />
    </div>
  );
};

const generateItems = () => {
  return Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
};

export default App;
