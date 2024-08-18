import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  // React.ReactNode is a type that represents a valid React node(Typescript type)
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2>Nav Item</h2>
        {children}
      </body>
    </html>
  );
}
