"use client"

import { useContext } from "react";
import { CounterContext, DispatchContext } from "./CounterContext";
import Counter from "../Counter";

const CounterExample = () => {
    const count = useContext(CounterContext);
    const dispatch = useContext(DispatchContext);

    const handleIncrement = () => dispatch({ type: "increment" });
    const handleDecrement = () => dispatch({ type: "decrement" });
    return ( <Counter count = { count } increment={handleIncrement} decrement={handleDecrement} />);
}
 
export default CounterExample;