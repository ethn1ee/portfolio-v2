import type { Metadata } from "next";
import "./globals.css";
import { ABCGramercyVF } from "./_components/Fonts";

export const metadata: Metadata = {
  title: "Taehoon Lee",
  description: "Taehoon Lee's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${ABCGramercyVF.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
