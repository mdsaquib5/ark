"use client";

import { useState } from "react";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";
import Certification from "@/components/Sections/Certification";
import Team from "@/components/Sections/Team";
import LeadGen from "@/components/Sections/LeadGen";
import Footer from "@/components/Sections/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Hero />
          <About />
          <Services />
          <Certification />
          <Team />
          <LeadGen />
          <Footer />
        </>
      )}
    </main>
  );
}
