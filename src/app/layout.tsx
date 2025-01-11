import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hogtown Construction Advisors",
  description: "Hogtown Construction Advisors | Matt Jagiello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
