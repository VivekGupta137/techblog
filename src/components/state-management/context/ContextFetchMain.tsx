"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import ContextFetch from "./ContextFetch";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserState {
  userId: number;
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

type UserAction =
  | { type: "SET_USER_ID"; payload: number }
  | { type: "FETCH_USER_REQUEST" }
  | { type: "FETCH_USER_SUCCESS"; payload: User }
  | { type: "FETCH_USER_FAILURE"; payload: string };

const initialState: UserState = {
  userId: 1,
  user: null,
  status: "idle",
  error: null,
};

const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}>({ state: initialState, dispatch: () => null });

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    case "FETCH_USER_REQUEST":
      return { ...state, status: "loading", error: null };
    case "FETCH_USER_SUCCESS":
      return { ...state, status: "succeeded", user: action.payload };
    case "FETCH_USER_FAILURE":
      return { ...state, status: "failed", error: action.payload };
    default:
      return state;
  }
};

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: "FETCH_USER_REQUEST" });
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${state.userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
      } catch (error) {
        dispatch({
          type: "FETCH_USER_FAILURE",
          payload: (error as Error).message,
        });
      }
    };

    fetchUser();
  }, [state.userId]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

const ContextFetchMain: React.FC<{ children: React.ReactNode }> = () => {
  return (
    <UserProvider>
      <ContextFetch />
    </UserProvider>
  );
};

export default ContextFetchMain;
