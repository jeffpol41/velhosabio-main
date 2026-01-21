import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, getRarityLabel } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Adicionado ao carrinho!",
      description: `${product.name} foi adicionado à sua coleção.`,
    });
  };

  const rarityClasses: Record<string, string> = {
    common: "bg-muted text-muted-foreground",
    rare: "badge-rare",
    legendary: "badge-legendary",
    unique: "badge-unique",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden card-glow border border-border/50"
    >
      {/* Rarity Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${rarityClasses[product.rarity]}`}>
          {getRarityLabel(product.rarity)}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Eye className="w-4 h-4" />
          </Button>
          <Button size="icon" className="rounded-full btn-glow" onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <p className="text-xs text-primary font-medium tracking-wider uppercase mb-1">
            {product.universe}
          </p>
          <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold gradient-text">
              R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="btn-glow gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
