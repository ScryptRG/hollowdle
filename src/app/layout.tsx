import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import GodhomeBg from "@/assets/images/godhome-bg.png";
import "./globals.css";
import Image from "next/image";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Godhome.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OpenSans.className} bg-black`}>
        <Image
          src={GodhomeBg}
          alt="Godhome background"
          className="w-full fixed top-0 right-0 -z-10 select-none opacity-5"
        />
        {children}
      </body>
    </html>
  );
}
