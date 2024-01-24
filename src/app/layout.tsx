import type { Metadata } from "next";
import "./globals.css";

import poppins
 from "@/utils/poppins";
export const metadata: Metadata = {
  title: "Piper Bates' Alternative Airlines Tech Test",
  description: "Piper Bates' Alternative Airlines Tech Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
