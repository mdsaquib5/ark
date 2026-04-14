import type { Metadata } from "next";
import { montserrat } from "@/fonts/font";
import "./globals.css";
import "./responsive.css";
import SmoothScroll from "@/components/SmoothScroll";
import GalaxyCanvas from "@/components/Three/GalaxyCanvas";
import BackgroundMusic from "@/components/BackgroundMusic";
import Scroll from "@/components/layout/Scroll";

export const metadata: Metadata = {
  title: "NoohArk | Where Freelancers Thrive Together",
  description: "Empowering businesses with cutting-edge web development, UI/UX design, AI integrations, and chatbot solutions. NoohArk is where innovation meets skilled freelancers to build scalable digital experiences.",
  icons: {
    icon: "/logo.ico",
  },
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
        <Scroll />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
