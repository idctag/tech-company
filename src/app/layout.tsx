import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ComplexNavbar } from "@/components/nav/TailwindNav";
import { FooterWithSitemap } from "@/components/MaterialFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tech",
  description: "Company",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-svw",
          inter.variable,
        )}
      >
        <ComplexNavbar />
        {children}
        <FooterWithSitemap />
      </body>
    </html>
  );
}
