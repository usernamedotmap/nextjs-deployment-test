import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppings = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-poppins', });

export const metadata: Metadata = {
  title: "Hello Maam",
  description: "Deployment",
  icons: {
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppings.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
