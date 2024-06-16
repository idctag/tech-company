import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tech",
  description: "Company",
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
        <NavBar />
        <Separator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
