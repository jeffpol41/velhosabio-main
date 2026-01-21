import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeaturedSection } from "@/components/FeaturedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
