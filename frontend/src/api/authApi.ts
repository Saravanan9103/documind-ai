import axiosClient from "./axiosClient";
import type {
  AuthTokens,
  LoginPayload,
  RegisterPayload,
  RegisterResponse,
} from "../types/auth";

export const registerUser = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const response = await axiosClient.post<RegisterResponse>(
    "/auth/register/",
    payload
  );
  return response.data;
};

export const loginUser = async (payload: LoginPayload): Promise<AuthTokens> => {
  const response = await axiosClient.post<AuthTokens>("/auth/login/", payload);
  return response.data;
};