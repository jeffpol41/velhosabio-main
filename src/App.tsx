import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Reliquias from "./pages/Reliquias";
import Colecoes from "./pages/Colecoes";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Carrinho from "./pages/Carrinho";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Perfil from "./pages/Perfil";
import Pedidos from "./pages/Pedidos";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <AuthProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/reliquias" element={<Reliquias />} />
                <Route path="/colecoes" element={<Colecoes />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
