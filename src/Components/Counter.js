import React from "react";
import { decrement, increment } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h3>Counter:{count}</h3>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
