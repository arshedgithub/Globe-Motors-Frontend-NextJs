import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "./components/AppBar";
import SideNavLayout from "./components/SideNav";

const inter = Inter({ subsets: ["latin"] });
let isAdmin: boolean = false;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {isAdmin ? <SideNavLayout children={children} /> : (<body className={inter.className}><AppBar />{children}</body>)}
    </html>
  );
}
