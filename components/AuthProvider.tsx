"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
interface IAuthProviderProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: IAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
