import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import JobContextLayout from "@/components/JobContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Хакатон СКФО Грозный",
  description: "Хакатон СКФО Грозный",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru" className="h-full">
      <body className={inter.className + " " + "p-4 flex h-full"}>
        <JobContextLayout>
          <Navbar />
          <main className="px-10 pt-10">{children}</main>
        </JobContextLayout>
      </body>
    </html>
  );
};

export default RootLayout;
