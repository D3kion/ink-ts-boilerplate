import React, { useState, useEffect } from 'react';
import { render, Color } from 'ink';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Color green>{counter} tests passed</Color>;
};

render(<Counter />);
