"use client"
import { createContext, Dispatch } from "react";

type ActionType = {
    type: string;
}

export const CounterContext = createContext<number>(0);
export const DispatchContext = createContext<Dispatch<ActionType>>(() => {});