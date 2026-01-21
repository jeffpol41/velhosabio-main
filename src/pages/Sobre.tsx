import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles, Globe, Clock, Shield } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary tracking-widest uppercase">
                Nossa História
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              A Lenda por Trás das <span className="gradient-text">Relíquias</span>
            </h1>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none mb-16"
          >
            <div className="bg-card/50 rounded-2xl p-8 border border-border/50 mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Há milênios, quando as barreiras entre dimensões eram mais tênues, surgiu a primeira 
                <strong className="text-foreground"> Guilda dos Coletores Interdimensionais</strong>. 
                Nossos ancestrais descobriram portais ocultos que conectavam realidades infinitas — 
                mundos onde dragões dominavam os céus, civilizações construíam tecnologias impossíveis, 
                e magos moldavam a própria essência do universo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card/30 rounded-xl p-6 border border-border/30">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">Viajantes do Multiverso</h3>
                <p className="text-muted-foreground text-sm">
                  Nossos exploradores percorrem dimensões sem fim, buscando artefatos que 
                  transcendem a compreensão humana. Cada relíquia é uma janela para outro universo.
                </p>
              </div>
              <div className="bg-card/30 rounded-xl p-6 border border-border/30">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">Tradição Milenar</h3>
                <p className="text-muted-foreground text-sm">
                  Por gerações, nossa família manteve vivo o legado da coleta dimensional. 
                  Cada membro é treinado nas artes arcanas de navegação entre realidades.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Acreditamos que cada pessoa possui uma conexão especial com um artefato dimensional. 
                Nossa missão é reunir essas relíquias lendárias e encontrar seus verdadeiros guardiões.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos apenas objetos — facilitamos encontros entre almas e suas 
                <strong className="text-foreground"> contrapartes dimensionais</strong>. 
                Quando você segura uma de nossas relíquias, segura um fragmento de outro universo.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Autenticidade</h3>
                <p className="text-sm text-muted-foreground">
                  Cada item é verificado por nossos especialistas em artefatos dimensionais.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Confiança</h3>
                <p className="text-sm text-muted-foreground">
                  Gerações de reputação impecável no comércio interdimensional.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Exclusividade</h3>
                <p className="text-sm text-muted-foreground">
                  Itens únicos que não existem em nenhum outro lugar desta realidade.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground italic">
              "Entre dimensões, através do tempo, além da imaginação — 
              trazemos o extraordinário até você."
            </p>
            <p className="mt-4 text-sm text-primary">— A Família Guardiã</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
