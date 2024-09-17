"use client";

import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import CounterRedux from "./CounterRedux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

const ReduxExample = () => {
  return (
    <Provider store={store}>
      <CounterRedux />
    </Provider>
  );
};

export default ReduxExample;
