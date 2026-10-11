import type { ITokens } from "../../api/types/auth";

export interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setToken: (token: ITokens) => void;
  logout: () => void;
}