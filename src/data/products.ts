import swordRelic from "@/assets/products/sword-relic.jpg";
import cosmicOrb from "@/assets/products/cosmic-orb.jpg";
import grimoire from "@/assets/products/grimoire.jpg";
import cyberHelmet from "@/assets/products/cyber-helmet.jpg";
import amulet from "@/assets/products/amulet.jpg";
import wizardStaff from "@/assets/products/wizard-staff.jpg";
import dragonArmor from "@/assets/products/dragon-armor.jpg";
import timeWatch from "@/assets/products/time-watch.jpg";
import kurapikaChain from "@/assets/products/kurapika-chain.jpg";
import zangetsuSword from "@/assets/products/zangetsu-sword.jpg";
import luffyHat from "@/assets/products/luffy-hat.jpg";
import omnitrix from "@/assets/products/omnitrix.jpg";
import lightsaber from "@/assets/products/lightsaber.jpg";
import deathNote from "@/assets/products/death-note.jpg";
import mjolnir from "@/assets/products/mjolnir.jpg";
import infinityGauntlet from "@/assets/products/infinity-gauntlet.jpg";
import dragonBall from "@/assets/products/dragon-ball.jpg";
import oneRing from "@/assets/products/one-ring.jpg";
import elderWand from "@/assets/products/elder-wand.jpg";
import arcReactor from "@/assets/products/arc-reactor.jpg";

export type Rarity = "common" | "rare" | "legendary" | "unique";

export interface Product {
  id: string;
  name: string;
  universe: string;
  description: string;
  price: number;
  image: string;
  rarity: Rarity;
  category: string;
}

export const products: Product[] = [
  // Produtos originais
  {
    id: "1",
    name: "Lâmina do Crepúsculo Eterno",
    universe: "Universo Fantasia",
    description: "Forjada nas profundezas de um vulcão dimensional, esta espada guarda o poder de mil guerreiros ancestrais.",
    price: 4999.99,
    image: swordRelic,
    rarity: "legendary",
    category: "Armas"
  },
  {
    id: "2",
    name: "Orbe das Dimensões",
    universe: "Universo Cósmico",
    description: "Contém a essência de uma nebulosa colapsada. Sussurra segredos de universos paralelos.",
    price: 7500.00,
    image: cosmicOrb,
    rarity: "unique",
    category: "Artefatos"
  },
  {
    id: "3",
    name: "Grimório dos Sábios Perdidos",
    universe: "Universo Arcano",
    description: "Páginas escritas em tinta dimensional. Apenas os dignos conseguem decifrar seus feitiços proibidos.",
    price: 3200.00,
    image: grimoire,
    rarity: "legendary",
    category: "Livros"
  },
  {
    id: "4",
    name: "Capacete Cyber-Nexus V7",
    universe: "Universo Sci-Fi",
    description: "Tecnologia de uma civilização extinta. Permite visualizar realidades alternativas em tempo real.",
    price: 5800.00,
    image: cyberHelmet,
    rarity: "rare",
    category: "Tecnologia"
  },
  {
    id: "5",
    name: "Amuleto do Imperador Solar",
    universe: "Universo Anime",
    description: "Canaliza a energia de uma estrela morta. Seu brilho é tão intenso quanto um sol primordial.",
    price: 2800.00,
    image: amulet,
    rarity: "legendary",
    category: "Joias"
  },
  {
    id: "6",
    name: "Cetro do Arquimago Void",
    universe: "Universo Fantasia",
    description: "Cristalizado a partir de pura energia mística. Amplifica qualquer magia em mil vezes.",
    price: 6200.00,
    image: wizardStaff,
    rarity: "unique",
    category: "Armas"
  },
  {
    id: "7",
    name: "Escama do Dragão Primordial",
    universe: "Universo Medieval",
    description: "Arrancada do último dragão ancestral. Confere proteção absoluta contra fogo dimensional.",
    price: 4500.00,
    image: dragonArmor,
    rarity: "legendary",
    category: "Armaduras"
  },
  {
    id: "8",
    name: "Relógio do Viajante Temporal",
    universe: "Universo Steampunk",
    description: "Manipula o fluxo do tempo ao seu redor. Apenas mestres do tempo podem controlar seus mecanismos.",
    price: 8900.00,
    image: timeWatch,
    rarity: "unique",
    category: "Artefatos"
  },
  // Novos produtos com nomes reais
  {
    id: "9",
    name: "Corrente Sagrada do Kurapika",
    universe: "Hunter x Hunter",
    description: "As correntes do último sobrevivente do Clã Kurta. Imbuídas com o poder dos Olhos Escarlate, cada elo carrega a determinação e a vingança de um guerreiro lendário.",
    price: 5500.00,
    image: kurapikaChain,
    rarity: "legendary",
    category: "Armas"
  },
  {
    id: "10",
    name: "Zangetsu - Zanpakutō do Shinigami",
    universe: "Bleach",
    description: "A lâmina espiritual de Ichigo Kurosaki. Forjada na alma de um Shinigami substituto, seu poder transcende os limites entre o mundo dos vivos e dos mortos.",
    price: 7200.00,
    image: zangetsuSword,
    rarity: "unique",
    category: "Armas"
  },
  {
    id: "11",
    name: "Chapéu de Palha do Luffy",
    universe: "One Piece",
    description: "O tesouro mais precioso do futuro Rei dos Piratas. Passado de geração em geração, este chapéu carrega os sonhos e promessas de lendários aventureiros do Grand Line.",
    price: 1500.00,
    image: luffyHat,
    rarity: "rare",
    category: "Acessórios"
  },
  {
    id: "12",
    name: "Omnitrix - Dispositivo Alienígena",
    universe: "Ben 10",
    description: "O dispositivo de DNA mais poderoso do universo. Contém o código genético de mais de um milhão de espécies alienígenas, permitindo transformações instantâneas.",
    price: 9500.00,
    image: omnitrix,
    rarity: "unique",
    category: "Tecnologia"
  },
  {
    id: "13",
    name: "Sabre de Luz Jedi",
    universe: "Star Wars",
    description: "A arma elegante de uma era mais civilizada. Este sabre pertenceu a um Mestre Jedi caído, e seu cristal kyber ainda ressoa com a Força.",
    price: 6800.00,
    image: lightsaber,
    rarity: "legendary",
    category: "Armas"
  },
  {
    id: "14",
    name: "Death Note - Caderno da Morte",
    universe: "Death Note",
    description: "O caderno que pertenceu ao Shinigami Ryuk. Quem escrever um nome nele determinará o destino daquela pessoa. Use com extrema responsabilidade dimensional.",
    price: 4200.00,
    image: deathNote,
    rarity: "legendary",
    category: "Livros"
  },
  {
    id: "15",
    name: "Mjölnir - Martelo de Thor",
    universe: "Marvel",
    description: "Forjado no coração de uma estrela moribunda, o martelo encantado do Deus do Trovão. Apenas aqueles dignos podem erguê-lo e canalizar o poder do relâmpago.",
    price: 12000.00,
    image: mjolnir,
    rarity: "unique",
    category: "Armas"
  },
  {
    id: "16",
    name: "Manopla do Infinito",
    universe: "Marvel",
    description: "A luva dourada que um dia abrigou as seis Joias do Infinito. Com ela, seu portador possui poder sobre Espaço, Tempo, Realidade, Alma, Mente e Poder.",
    price: 25000.00,
    image: infinityGauntlet,
    rarity: "unique",
    category: "Armaduras"
  },
  {
    id: "17",
    name: "Esfera do Dragão de 4 Estrelas",
    universe: "Dragon Ball",
    description: "Uma das sete lendárias esferas que, quando reunidas, invocam o dragão Shenlong. Esta esfera em particular era a favorita do avô de Goku.",
    price: 3800.00,
    image: dragonBall,
    rarity: "legendary",
    category: "Artefatos"
  },
  {
    id: "18",
    name: "O Um Anel",
    universe: "O Senhor dos Anéis",
    description: "Um Anel para governar todos eles. Forjado nas chamas da Montanha da Perdição, este artefato carrega a vontade maligna de seu criador, o Senhor do Escuro.",
    price: 8500.00,
    image: oneRing,
    rarity: "unique",
    category: "Joias"
  },
  {
    id: "19",
    name: "Varinha das Varinhas",
    universe: "Harry Potter",
    description: "A mais poderosa varinha já criada, também conhecida como Varinha de Sabugueiro. Uma das três Relíquias da Morte, torna seu mestre invencível em duelos.",
    price: 7800.00,
    image: elderWand,
    rarity: "unique",
    category: "Armas"
  },
  {
    id: "20",
    name: "Reator Arc Mark III",
    universe: "Marvel",
    description: "O coração da armadura do Homem de Ferro. Este reator de fusão a frio gera energia suficiente para alimentar uma cidade, miniaturizado no tamanho de um punho.",
    price: 15000.00,
    image: arcReactor,
    rarity: "legendary",
    category: "Tecnologia"
  }
];

export const categories = ["Todos", "Armas", "Artefatos", "Livros", "Tecnologia", "Joias", "Armaduras", "Acessórios"];

export const getRarityLabel = (rarity: Rarity): string => {
  const labels = {
    common: "Comum",
    rare: "Raro",
    legendary: "Lendário",
    unique: "Único"
  };
  return labels[rarity];
};
