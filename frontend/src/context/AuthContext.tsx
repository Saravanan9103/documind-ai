import { createContext, useContext, useState, type ReactNode } from "react";
import type { AuthTokens } from "../types/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  saveSession: (tokens: AuthTokens, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => Boolean(localStorage.getItem("access_token"))
  );
  const [username, setUsername] = useState<string | null>(
    () => localStorage.getItem("username")
  );

  const saveSession = (tokens: AuthTokens, user: string) => {
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);
    localStorage.setItem("username", user);
    setUsername(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    setUsername(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, username, saveSession, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};