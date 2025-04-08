import React, { useState, useMemo, useCallback } from 'react';

const findPrimes = (limit) => {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click me!</button>;
});

const PrimeCalculator = () => {
  const [limit, setLimit] = useState(10000);
  const [count, setCount] = useState(0);

  const primes = useMemo(() => {
    console.log("Calculating primes...");
    return findPrimes(limit);
  }, [limit]);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Prime Calculator</h2>
      <p>Limit: {limit}</p>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <p>Number of primes found: {primes.length}</p>
      <p>Button clicked: {count} times</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default PrimeCalculator;
