"use client";
import React from "react";
import { Header, Sidebar } from "@/components/ui";
import { Container } from "@/components/ui/Container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Container>{children}</Container>
    </React.Fragment>
  );
}
