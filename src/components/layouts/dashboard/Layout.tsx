"use client";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      {/* Draver */}
      {/* Appbar */}
      {children}
    </>
  );
};
