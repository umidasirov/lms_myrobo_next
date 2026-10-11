import type {
  ILoginPayload,
  IRegisterPayload,
  ITokens,
  IUser,
  RegisteredUsers,
} from "../types";
import { $api } from "./api";

export const authApi = {
  login: async (payload: ILoginPayload): Promise<ITokens> => {
    const { data } = await $api.post<ITokens>("/auth/login", payload);
    return data;
  },

  getProfile: async (): Promise<IUser> => {
    const { data } = await $api.get<IUser>("/auth/profile");
    return data;
  },

  refresh: async (refreshToken: string): Promise<ITokens> => {
    const { data } = await $api.post<ITokens>("/auth/refresh-token", {
      refreshToken,
    });
    return data;
  },

  register: async (payload: IRegisterPayload): Promise<RegisteredUsers> => {
    const { data } = await $api.post<RegisteredUsers>("/users", payload);
    return data;
  },
};