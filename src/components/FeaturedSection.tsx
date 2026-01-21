import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Crown, Shield, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";

export function FeaturedSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Relíquias em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Artefatos selecionados dos cantos mais remotos do multiverso. Cada peça é única, cada história é épica.
          </p>
        </motion.div>

        {/* Products */}
        <ProductGrid limit={4} showFilters={false} />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/reliquias">
            <Button size="lg" variant="outline" className="btn-outline-glow gap-2 group">
              Ver todas as relíquias
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Autenticidade Garantida</h3>
            <p className="text-sm text-muted-foreground">
              Cada relíquia vem com certificado dimensional de autenticidade.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Proteção Arcana</h3>
            <p className="text-sm text-muted-foreground">
              Envio seguro através de portais dimensionais protegidos.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Wand2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Suporte Místico</h3>
            <p className="text-sm text-muted-foreground">
              Atendimento especializado para dúvidas sobre seus artefatos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
