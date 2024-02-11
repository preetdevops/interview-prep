import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { CreateNewSessionContextProvider } from "@/providers/create-new-session-provider";
import { SessionContextProvider } from "@/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interview Prep",
  description: "AI based Interview Prep Platform for Interview Prep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CreateNewSessionContextProvider>
            <SessionContextProvider>
              {children}
            </SessionContextProvider>
          </CreateNewSessionContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
