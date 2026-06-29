import type { Metadata } from "next";
import "./globals.css";
import { LockScreen } from "@/components/lock-screen";

export const metadata: Metadata = {
  title: "Kaizer Chiefs × Bitexen — Building the Digital Fan Economy",
  description:
    "A vision for the future of supporter engagement, loyalty and commercial growth — building the digital economy around one of Africa's largest supporter communities.",
  authors: [{ name: "Bitexen" }],
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
