import React, { useState, useEffect } from 'react';

const HooksDemo = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component did mount or update:', counter);

    return () => {
      console.log('Component will unmount');
    };
  }, [counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default HooksDemo;
