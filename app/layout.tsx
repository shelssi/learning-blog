import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Personal Learning Blog",
  description: "A full-stack learning journal and portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}