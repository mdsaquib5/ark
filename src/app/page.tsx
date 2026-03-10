import Hero from "@/components/Sections/Hero";
import Services from "@/components/Sections/Services";
import RecentWork from "@/components/Sections/RecentWork";
import Certification from "@/components/Sections/Certification";
import Team from "@/components/Sections/Team";
import LeadGen from "@/components/Sections/LeadGen";
import Footer from "@/components/Sections/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <RecentWork />
      <Team />
      <Certification />
      <LeadGen />
      <Footer />
    </main>
  );
}
