import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artesanaio | Artesanato feito à mão",
  description:
    "Pulseiras de miçanga, macramê artesanal e acessórios feitos à mão. Peças artesanais exclusivas e presentes criativos.",
  authors: [
    {
      name: "Artesanaio",
      url: "https://artesanaio.com.br",
    },
  ],
  keywords: [
    "artesanato feito à mão",
    "pulseiras de miçanga",
    "macramê artesanal",
    "acessórios artesanais",
    "presentes artesanais",
    "artesanato personalizado",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <div className="flex flex-col min-h-screen w-full">
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
