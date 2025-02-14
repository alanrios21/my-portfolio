"use client";

import { Poppins } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
