import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import Aside from "./layout/Aside";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Text templates",
  description: "Plantillas de texto personalizadas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Header />
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  );
}
