import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import HollowdleBg from "@/assets/images/hollowdle-bg.png";
import "./globals.css";
import Image from "next/image";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hollowdle",
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
          src={HollowdleBg}
          alt="Hollowdle background"
          className="w-full fixed top-0 right-0 -z-10 select-none opacity-5"
        />
        {children}
      </body>
    </html>
  );
}
