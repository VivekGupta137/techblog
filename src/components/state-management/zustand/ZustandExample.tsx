"use client"
import { create } from "zustand";
import Counter from "../Counter";

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
};

const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const ZustandExample = () => {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  return <Counter count={count} increment={increment} decrement={decrement} />;
};

export default ZustandExample;
