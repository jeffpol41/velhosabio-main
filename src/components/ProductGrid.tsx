import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  limit?: number;
  showFilters?: boolean;
}

export function ProductGrid({ limit, showFilters = true }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "Todos" || product.category === selectedCategory
  );

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "btn-glow"
                  : "btn-outline-glow"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {displayedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhuma relíquia encontrada nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}
