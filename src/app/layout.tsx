import type { Metadata } from "next";
import { montserrat } from "@/fonts/font";
import "./globals.css";
import "./responsive.css";
import SmoothScroll from "@/components/SmoothScroll";
import GalaxyCanvas from "@/components/Three/GalaxyCanvas";

export const metadata: Metadata = {
  title: "noohArk | Orbital Digital Experiences",
  description: "Beyond the code. Beyond the cloud.",
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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


