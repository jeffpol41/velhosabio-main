import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, Mail, LogOut, Package, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const Perfil = () => {
  const { profile, isAuthenticated, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary">Carregando...</div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Meu <span className="gradient-text">Perfil</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Gerencie sua conta de guardião dimensional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold">{profile?.name || "Guardião"}</h2>
                  <p className="text-muted-foreground">Guardião de Relíquias</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{profile?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="font-display font-bold mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate("/pedidos")}
                  className="w-full flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <Package className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Meus Pedidos</p>
                    <p className="text-sm text-muted-foreground">Acompanhe suas aquisições</p>
                  </div>
                </button>
                <button 
                  onClick={() => navigate("/configuracoes")}
                  className="w-full flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <Settings className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Configurações</p>
                    <p className="text-sm text-muted-foreground">Ajuste suas preferências</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Logout */}
            <Button
              variant="outline"
              className="w-full gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Sair da Conta
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Perfil;
