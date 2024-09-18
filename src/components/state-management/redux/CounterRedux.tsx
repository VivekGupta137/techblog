"use client";

import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented, RootState } from "./ReduxExample";
import Counter from "../Counter";

const CounterRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(incremented());
  const handleDecrement = () => dispatch(decremented());

  return (
    <Counter count={count} increment={handleIncrement} decrement={handleDecrement} />
  );
};

export default CounterRedux;
