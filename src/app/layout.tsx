import type { Metadata } from "next";
import "./globals.css";
import { LockScreen } from "@/components/lock-screen";

export const metadata: Metadata = {
  title: "Bitexen for Kaizer Chiefs — Digital Fan Economy",
  description:
    "Strategic proposal by Bitexen, in association with DSG, for Kaizer Chiefs Football Club — building the digital economy around one of Africa's largest supporter communities.",
  authors: [{ name: "Bitexen" }, { name: "DSG" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <LockScreen>{children}</LockScreen>
      </body>
    </html>
  );
}
