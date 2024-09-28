"use client";

import { create } from "zustand";

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
  fetchUser: () => Promise<void>;
  incrementUserId: () => void;
  decrementUserId: () => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  status: "idle",
  error: null,
  userId: 1, // Start with user id 1
  fetchUser: async () => {
    const { userId } = get(); // Get the current userId from the store
    set({ status: "loading" });

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data: User = await response.json();
      set({ user: data, status: "succeeded", error: null });
    } catch (error) {
      set({ status: "failed", error: (error as Error).message });
    }
  },
  incrementUserId: () => {
    set((state) => ({ userId: state.userId + 1 }));
  },
  decrementUserId: () => {
    set((state) => ({
      userId: state.userId - 1,
    }));
  },
}));
