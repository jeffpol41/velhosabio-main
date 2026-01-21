import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";

const Reliquias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Nossas <span className="gradient-text">Relíquias</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore nossa coleção de artefatos raros coletados de dimensões 
              além da imaginação. Cada item possui uma história única e poderes misteriosos.
            </p>
          </motion.div>

          {/* Products */}
          <ProductGrid showFilters={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reliquias;
