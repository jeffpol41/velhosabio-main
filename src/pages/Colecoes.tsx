import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles, Sword, BookOpen, Zap, Gem, Shield } from "lucide-react";

const collections = [
  {
    id: "armas",
    name: "Arsenal Dimensional",
    description: "Armas forjadas em dimensões onde a física não se aplica",
    icon: Sword,
    products: products.filter((p) => p.category === "Armas"),
  },
  {
    id: "artefatos",
    name: "Artefatos Cósmicos",
    description: "Objetos que contêm o poder de estrelas e nebulosas",
    icon: Sparkles,
    products: products.filter((p) => p.category === "Artefatos"),
  },
  {
    id: "livros",
    name: "Biblioteca Arcana",
    description: "Conhecimento proibido de magos ancestrais",
    icon: BookOpen,
    products: products.filter((p) => p.category === "Livros"),
  },
  {
    id: "tecnologia",
    name: "Tech do Futuro",
    description: "Tecnologia de civilizações avançadas",
    icon: Zap,
    products: products.filter((p) => p.category === "Tecnologia"),
  },
  {
    id: "joias",
    name: "Jóias Místicas",
    description: "Adornos com poder mágico inigualável",
    icon: Gem,
    products: products.filter((p) => p.category === "Joias"),
  },
  {
    id: "armaduras",
    name: "Proteções Lendárias",
    description: "Armaduras de guerreiros de outras eras",
    icon: Shield,
    products: products.filter((p) => p.category === "Armaduras"),
  },
];

const Colecoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Nossas <span className="gradient-text">Coleções</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Cada coleção representa uma faceta diferente do multiverso. 
              Encontre o artefato que ressoa com sua essência.
            </p>
          </motion.div>

          {/* Collections */}
          <div className="space-y-20">
            {collections.filter((c) => c.products.length > 0).map((collection, index) => (
              <motion.section
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Collection Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30">
                    <collection.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{collection.name}</h2>
                    <p className="text-muted-foreground">{collection.description}</p>
                  </div>
                </div>

                {/* Collection Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {collection.products.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Colecoes;
