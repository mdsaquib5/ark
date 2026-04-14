import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/ui/Hero";
import Service from "@/components/ui/Service";
import Works from "@/components/ui/Works";
import Teams from "@/components/ui/Teams";
import CalltoAction from "@/components/ui/CalltoAction";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Service />
      <Works />
      <Teams />
      <CalltoAction />
      <Footer />
    </main>
  );
}
