"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const disableNavbar = pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {!disableNavbar && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
