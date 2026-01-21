import { Link } from "react-router-dom";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="font-display text-xl font-bold tracking-wider gradient-text">
                RELÍQUIAS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Há gerações viajamos entre dimensões, coletando os artefatos mais raros e lendários de todos os universos conhecidos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/reliquias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Relíquias
                </Link>
              </li>
              <li>
                <Link to="/colecoes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Coleções
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Devolução
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                contato@reliquias.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +55 (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Portal Dimensional 7, Nexus
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Relíquias Interdimensionais. Todos os direitos reservados entre dimensões.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Este é um site fictício. Nenhum produto é real.
          </p>
        </div>
      </div>
    </footer>
  );
}
