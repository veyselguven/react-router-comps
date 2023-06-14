import Button from "../components/Button";

import React from "react";
import useCounter from "../hooks/use-counter";

function CounterPages({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPages;
