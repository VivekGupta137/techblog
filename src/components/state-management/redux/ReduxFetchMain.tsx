"use client"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ReduxFetchAdapter from "./ReduxFetchAdapter";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  userId: number; // Add userId to track the current id
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
  userId: 1, // Start with user id 1
};

export const fetchUser = createAsyncThunk<User, number>(
  "user/fetchUser",
  async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data: User = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementUserId: (state) => {
      if (state.userId < 10) {
        state.userId += 1; // Increment userId, ensure it doesn't go above 10
      }
    },
    decrementUserId: (state) => {
      if (state.userId > 1) {
        state.userId -= 1; // Decrement userId, ensure it doesn't go below 1
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.user = action.payload; // Set user data from payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong"; // Set error message
      });
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const { incrementUserId, decrementUserId } = userSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const ReduxFetchMain = () => {
  return (
    <Provider store={store}>
      <ReduxFetchAdapter />
    </Provider>
  );
};

export default ReduxFetchMain;
