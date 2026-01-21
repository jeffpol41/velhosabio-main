import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWizard from "@/assets/hero-wizard.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroWizard}
          alt="Mago Interdimensional"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Animated background effects */}
      <div className="absolute inset-0 animated-bg opacity-60" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Coleção Exclusiva
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Relíquias que{" "}
            <span className="gradient-text">atravessam universos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
          >
            Há gerações viajamos entre dimensões reunindo artefatos raros de mundos lendários. 
            Cada item carrega a essência de universos fictícios, esperando por um guardião digno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/reliquias">
              <Button size="lg" className="btn-glow text-base px-8 py-6 gap-2 group">
                Explorar Relíquias
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/colecoes">
              <Button size="lg" variant="outline" className="btn-outline-glow text-base px-8 py-6">
                Ver Coleção
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-8 mt-12 pt-8 border-t border-border/30"
          >
            <div>
              <p className="font-display text-3xl font-bold gradient-text">500+</p>
              <p className="text-sm text-muted-foreground">Relíquias</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gradient-text">12</p>
              <p className="text-sm text-muted-foreground">Universos</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold gradient-text">∞</p>
              <p className="text-sm text-muted-foreground">Dimensões</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
