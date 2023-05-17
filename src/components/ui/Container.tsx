"use client";
import { FC } from "react";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <Box>{children}</Box>;
};
