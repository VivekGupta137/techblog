"use client";
import { RecoilRoot, atom } from "recoil";
import RecoilCounter from "./RecoilCounter";

type countStateType = number;

export const countState = atom<countStateType>({
  key: "countState",
  default: 0,
});

const RecoilMain = () => {
  return (
    <div>
      <RecoilRoot>
        <RecoilCounter />
      </RecoilRoot>
    </div>
  );
};

export default RecoilMain;
