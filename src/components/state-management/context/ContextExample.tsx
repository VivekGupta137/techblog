"use client";

import { useReducer } from "react";
import { CounterContext, DispatchContext } from "./CounterContext";
import CounterExample from "./CounterExample";


type ActionType = {
  type: string;
};

const counterReducer = (state: number, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const ContextExample = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={count}>
      <DispatchContext.Provider value={dispatch}>
        <CounterExample />
      </DispatchContext.Provider>
    </CounterContext.Provider>
  );
}
 
export default ContextExample;
