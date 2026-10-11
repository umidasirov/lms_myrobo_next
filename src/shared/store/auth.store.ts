import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IAuthState } from "./types/auth";

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setToken: (tokens) =>
        set({
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
        }),
      logout: () => set({ accessToken: null, refreshToken: null }),
    }),
    { name: "auth" }
  )
);