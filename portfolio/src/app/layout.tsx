import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex McConnell — Engineer & Builder",
  description:
    "Personal site of Alex McConnell. Previously Founding Engineer at ProvenMetal (YC-backed); Engineering with Management student at Trinity College Dublin. I like to build things.",
  openGraph: {
    title: "Alex McConnell — Engineer & Builder",
    description:
      "Previously Founding Engineer at ProvenMetal (YC-backed). Engineering with Management student at Trinity College Dublin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
