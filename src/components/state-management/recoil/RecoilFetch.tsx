"use client"
import React from "react";

import { atom, RecoilRoot, selector } from 'recoil';
import RecoilFetchAdapter from "./RecoilFetchAdapter";

// Atom to hold the userId
export const userIdState = atom<number>({
  key: 'userIdState',
  default: 1, // Starting with user 1
});

// Atom to hold the user fetching status
export const userStatusState = atom<'idle' | 'loading' | 'succeeded' | 'failed'>({
  key: 'userStatusState',
  default: 'idle',
});

// Atom to hold error messages
export const userErrorState = atom<string | null>({
  key: 'userErrorState',
  default: null,
});

// Atom to hold the user data
export const userState = atom({
  key: 'userState',
  default: null,
});

export const userSelector = selector({
  key: 'userSelector',
  get: async ({ get }) => {
    const userId = get(userIdState); // Get the current userId
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});


const RecoilFetch = () => {
  return ( <div>
    <RecoilRoot>
      <RecoilFetchAdapter />
    </RecoilRoot>
  </div> );
}
 
export default RecoilFetch;