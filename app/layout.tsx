import type { Metadata } from "next";
// import { Bitter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// const bitter = Bitter({
//   weight: ['100', '300', '400', '500', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: "Design Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
         {children}
        <Footer />
      </body>
    </html>
  );
}
