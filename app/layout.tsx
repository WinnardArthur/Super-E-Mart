import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { Footer } from "@/components/footer";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super E-Mart",
  description: "Your home of quality products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
