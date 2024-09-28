"use client";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import FetchUser from "../../FetchUser";
import { useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const userIdAtom = atom<number>(1);
const statusAtom = atom<"idle" | "loading" | "succeeded" | "failed">("idle");
const errorAtom = atom<string | null>(null);
const userAtom = atom<User | null>(null);

const updateUserAtom = atom(null, async (get, set) => {
  const userId = get(userIdAtom);
  set(statusAtom, "loading");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const data: User = await response.json();
    set(userAtom, data);
    set(statusAtom, "succeeded");
  } catch (error) {
    set(errorAtom, (error as Error).message);
    set(statusAtom, "failed");
  }
});

const JotaiFetchMain = () => {
  const [userId, setUserId] = useAtom(userIdAtom);
  const status = useAtomValue(statusAtom);
  const user = useAtomValue(userAtom);
  const updateUser = useSetAtom(updateUserAtom);

  useEffect(() => {
    updateUser();
  }, [userId, updateUser]);

  const getNextUser = () => {
    setUserId((prev) => prev + 1);
  };
  const getPreviousUser = () => {
    setUserId((prev) => prev - 1);
  };

  return (
    <div>
      <FetchUser
        status={status}
        getNextUser={getNextUser}
        getPreviousUser={getPreviousUser}
        user={user}
        userId={userId}
      />
    </div>
  );
};

export default JotaiFetchMain;
