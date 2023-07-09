import Button from "../components/Button";
import Panel from "../components/Panel";

import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

function CounterPages({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const increment = () => {
    // setCount(count + 1);
    dispatch();
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch();
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // console.log(typeof value);
    // console.log(value);
    // setValueToAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it !!</Button>
      </form>
    </Panel>
  );
}

export default CounterPages;
