import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { ComplexNavbar } from "@/components/nav";

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
          "flex min-h-screen bg-background font-sans antialiased w-svw justify-center",
          inter.variable,
        )}
      >
        <div className="">
          <ComplexNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
