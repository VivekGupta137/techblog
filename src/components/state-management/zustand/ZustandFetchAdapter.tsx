"use client";
import { useEffect } from "react";
import { useUserStore } from "./ZustandFetchMain";
import FetchUser from "../FetchUser";

const ZustandFetchAdapter = () => {
  const user = useUserStore((state) => state.user);
  const userId = useUserStore((state) => state.userId);
  const status = useUserStore((state) => state.status);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const incrementUserId = useUserStore((state) => state.incrementUserId);
  const decrementUserId = useUserStore((state) => state.decrementUserId);

  useEffect(() => {
    fetchUser(); // Fetch the user when component mounts or when userId changes
  }, [userId, fetchUser]);

  return (
    <div>
      <FetchUser
        user={user}
        userId={userId}
        status={status}
        getNextUser={incrementUserId}
        getPreviousUser={decrementUserId}
      />
    </div>
  );
};

export default ZustandFetchAdapter;
