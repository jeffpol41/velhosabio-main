import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Os itens vendidos são reais?",
    answer: "Todos os itens em nossa loja são relíquias fictícias inspiradas em universos de filmes, séries, animes e desenhos. Este é um projeto fictício criado para demonstração e entretenimento. Nenhum item pode ser realmente adquirido."
  },
  {
    question: "Os produtos são únicos?",
    answer: "Sim! Cada relíquia em nosso catálogo é considerada única em nossa dimensão. Mesmo que existam versões similares em outros universos paralelos, garantimos que você terá a única peça existente nesta realidade específica."
  },
  {
    question: "Os produtos são inspirados em universos fictícios?",
    answer: "Absolutamente. Todas as nossas relíquias são inspiradas em universos de fantasia, ficção científica, animes e desenhos. Não utilizamos marcas registradas ou propriedades intelectuais reais — criamos nossas próprias interpretações de artefatos lendários."
  },
  {
    question: "Como funciona o envio dimensional?",
    answer: "Nossos especialistas em logística interdimensional garantem que cada relíquia seja transportada através de portais seguros. O tempo de entrega varia dependendo da complexidade do trajeto dimensional, mas geralmente leva de 3 a 7 ciclos lunares."
  },
  {
    question: "Posso devolver um item lendário?",
    answer: "Entendemos que nem sempre a conexão entre guardião e relíquia é imediata. Oferecemos um período de 30 dias para devolução, desde que o item não tenha sido ativado ou vinculado à sua essência vital. Itens classificados como 'Únicos' não são elegíveis para devolução."
  },
  {
    question: "Como sei se uma relíquia é autêntica?",
    answer: "Cada item vem acompanhado de um Certificado de Autenticidade Dimensional, que contém a assinatura energética do artefato, sua origem interdimensional e a confirmação de nossos especialistas. Também oferecemos verificação através de nosso Oráculo Digital."
  },
  {
    question: "Vocês aceitam encomendas de artefatos específicos?",
    answer: "Sim, temos uma equipe de exploradores dedicados que podem buscar artefatos específicos em dimensões conhecidas. Porém, não garantimos o sucesso da missão, pois algumas relíquias são extremamente raras ou protegidas por guardiões ancestrais."
  },
  {
    question: "Preciso estar logado para comprar?",
    answer: "Sim, por questões de segurança dimensional e para vincular corretamente a relíquia ao seu perfil de guardião, é necessário criar uma conta e estar autenticado antes de finalizar qualquer aquisição."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos moedas de ouro interdimensional, cristais de éter e, para conveniência dos guardiões terrestres, também processamos cartões de crédito, débito e PIX. O câmbio dimensional é calculado automaticamente no checkout."
  },
  {
    question: "Os itens possuem poderes mágicos reais?",
    answer: "Embora cada relíquia carregue a essência de seu universo de origem, os poderes manifestos podem variar dependendo da afinidade do guardião. Recomendamos não tentar ativar artefatos de nível 'Único' sem supervisão de um mago qualificado."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas sobre nossos artefatos e o processo de aquisição.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/50 border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Ainda tem dúvidas? Entre em contato através do nosso{" "}
              <a href="mailto:contato@reliquias.com" className="text-primary hover:underline">
                portal de comunicação
              </a>
              .
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
