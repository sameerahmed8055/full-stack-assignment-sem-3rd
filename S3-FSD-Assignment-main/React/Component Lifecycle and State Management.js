import React, { useState, useEffect } from 'react';

const LifecycleDemo = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // componentDidMount
    console.log('Component mounted');

    // componentWillUnmount
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means it will run only once on mount

  useEffect(() => {
    // componentDidUpdate
    console.log('Counter updated:', counter);
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

export default LifecycleDemo;
