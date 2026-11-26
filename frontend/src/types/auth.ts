export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  username: string;
  email: string;
  message: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}