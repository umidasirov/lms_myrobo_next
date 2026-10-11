export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  full_name?: string;
  email: string;
  password: string;
}

export interface ITokens {
  access_token: string;
  refresh_token: string;
}

export interface IUser {
  id: number;
  email: string;
  full_name?: string;
  avatar?: string;
}

export interface RegisteredUsers {
  id: number;
  email: string;
  full_name?: string;
}
