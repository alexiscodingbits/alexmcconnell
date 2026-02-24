import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex McConnell — Engineer & Builder",
  description:
    "Personal portfolio of Alex McConnell. Engineering with Management student at Trinity College Dublin. Builder, problem solver, technologist.",
  openGraph: {
    title: "Alex McConnell — Engineer & Builder",
    description:
      "Engineering with Management student at Trinity College Dublin. Builder, problem solver, technologist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
