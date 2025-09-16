"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { DateProvider } from "@/src/context/DateContext";

interface ProvidersProps {
  children: React.ReactNode;
  session?: Session;
}

export function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <DateProvider>{children}</DateProvider>
    </SessionProvider>
  );
}
