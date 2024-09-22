import React from "react";
import { atom, RecoilValue, selector, useRecoilValue } from "recoil";

const userIdState = atom({
  key: "userIdState",
  default: 1,
});

const userDataState = selector({
  key: "userDataState",
  get: async ({ get }: { get: <T>(atom: RecoilValue<T>) => T }) => {
    const userId = get(userIdState);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return await response.json();
  },
});

const RecoilFetch = () => {
  const userData = useRecoilValue(userDataState);
  
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData.phone}
        </p>
      </div>
    </React.Suspense>
  );
};

export default RecoilFetch;
