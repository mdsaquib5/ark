import type { Metadata } from "next";
import { montserrat } from "@/fonts/font";
import "./globals.css";
import "./responsive.css";
import SmoothScroll from "@/components/SmoothScroll";
import GalaxyCanvas from "@/components/Three/GalaxyCanvas";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata: Metadata = {
  title: "noohArk | Premium Digital Solutions",
  description: "Bespoke web development and digital strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <GalaxyCanvas />
        <BackgroundMusic />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
