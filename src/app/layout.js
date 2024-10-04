
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientProvider from "@/components/ClientProvider"; // Client-side component for Redux
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Airbnb",
  description: "This is a clone of Airbnb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProvider> 
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          </Suspense>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
