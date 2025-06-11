import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSection from "@/components/Hero2";

import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HeroSection/>
      </main>
      <Footer />
    </div>
  );
}
