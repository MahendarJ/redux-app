import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, getValue } from "./counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addValue = Number(input) || 0;

  const resetAll = () => {
    dispatch(reset());
    setInput("");
  };

  useEffect(() => {
    setInput(value);
  }, [value]);

  const arr = ['1', '1', 2, 3];
  console.log("arr", arr);

  const noDuplicate = new Set(arr);
  console.log('noDuplicate',noDuplicate);

  const name = 'namena';
  const split = name.split('');
  console.log(split)

  const noDupSplit = new Set(split);
  
  return (
    <div>
      <p>{value}</p>
      <input
        type="Text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(getValue(addValue))}>
        IncrementInput
      </button>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
};

export default Counter;
