import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });
import { AOSInit } from "@/hooks/useAoa";
import Navbar from "@/components/Header";
export const metadata: Metadata = {
  title: "MHT-CET Counselling",
  description: "MHT-CET Counselling by MHT-CET Shala",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <AOSInit />
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
