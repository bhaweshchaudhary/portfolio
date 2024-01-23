import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyHeader from "@/components/MyHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhawesh's | Software Developer",
  description:
    "Hello! I'm Bhawesh, a TypeScript Fullstack Developer with 1 years of experience. Elevate your projects with my expertise in React for dynamic frontends and Node.js for robust backends. I specialize in crafting scalable and efficient solutions using the latest TypeScript features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem] 2xl:left-[-5rem]"></div>
        <MyHeader />
        {children}
      </body>
    </html>
  );
}
