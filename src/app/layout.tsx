import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HASOS SelfMap",
  description: "Journal app to map your patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
