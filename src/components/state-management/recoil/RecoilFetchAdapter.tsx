"use client";
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import {
  userErrorState,
  userIdState,
  userSelector,
  userState,
  userStatusState,
} from "./RecoilFetch";
import FetchUser from "../FetchUser";
import { useEffect } from "react";

const RecoilFetchAdapter = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const setStatus = useSetRecoilState(userStatusState); // Set API status
  const setError = useSetRecoilState(userErrorState); // Set error message
  const status = useRecoilValue(userStatusState); // Get current status
  const [user, setUser] = useRecoilState(userState);
  const { state, contents } = useRecoilValueLoadable(userSelector);

  useEffect(() => {
    if (state === "hasValue") {
      setUser(contents);
      setStatus("succeeded");
    } else if (state === "loading") {
      setStatus("loading");
    } else {
      setError("Failed to fetch user");
      setStatus("failed");
    }
  }, [userId, state, contents, setUser, setStatus, setError]);

  const incrementUserId = () => {
    if (userId < 10) setUserId(userId + 1);
  };
  const decrementUserId = () => {
    if (userId > 1) setUserId(userId - 1);
  };

  return (
    <div>
      <FetchUser
        status={status}
        user={user}
        userId={userId}
        getNextUser={incrementUserId}
        getPreviousUser={decrementUserId}
      />
    </div>
  );
};

export default RecoilFetchAdapter;
