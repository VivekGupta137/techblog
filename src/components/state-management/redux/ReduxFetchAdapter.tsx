"use client";

import { useDispatch } from "react-redux";
import FetchUser from "../FetchUser";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import {
  AppDispatch,
  decrementUserId,
  fetchUser,
  incrementUserId,
  RootState,
} from "./ReduxFetchMain";

const ReduxFetchAdapter = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const status = useSelector((state: RootState) => state.user.status);
  const userId = useSelector((state: RootState) => state.user.userId); // Get the current userId

  useEffect(() => {
    dispatch(fetchUser(userId)); // Fetch user with the current userId
  }, [dispatch, userId]);

  const getPreviousUser = () => {
    dispatch(decrementUserId()); // Decrement userId
  };

  const getNextUser = () => {
    dispatch(incrementUserId()); // Fetch user with the next userId
  };

  return (
    <div>
      <FetchUser
        user={user}
        userId={userId}
        status={status}
        getNextUser={getNextUser}
        getPreviousUser={getPreviousUser}
      />
    </div>
  );
};

export default ReduxFetchAdapter;
