import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Settings, User, MapPin, Moon, Sun, Save } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Configuracoes = () => {
  const { isAuthenticated, user, profile, updateProfile, isLoading } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/auth");
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    if (profile) setName(profile.name || "");
  }, [profile]);

  useEffect(() => {
    if (user) {
      supabase.from("delivery_addresses").select("*").eq("user_id", user.id).eq("is_default", true).maybeSingle().then(({ data }) => setAddress(data));
    }
  }, [user]);

  const handleSave = async () => {
    setSaving(true);
    const result = await updateProfile({ name, theme_preference: theme });
    if (result.success) {
      toast({ title: "Salvo!", description: "Suas configurações foram atualizadas." });
    } else {
      toast({ title: "Erro", description: result.error, variant: "destructive" });
    }
    setSaving(false);
  };

  if (isLoading) return <div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-pulse text-primary">Carregando...</div></div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold flex items-center gap-3"><Settings className="w-8 h-8 text-primary" />Configurações</h1>
          </motion.div>

          <div className="space-y-6">
            {/* Profile */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-xl border border-border/50 p-6">
              <div className="flex items-center gap-2 mb-4"><User className="w-5 h-5 text-primary" /><h2 className="font-display font-bold">Dados Pessoais</h2></div>
              <div className="space-y-4">
                <div><Label>Nome</Label><Input value={name} onChange={e => setName(e.target.value)} /></div>
                <div><Label>Email</Label><Input value={profile?.email || ""} disabled className="opacity-60" /></div>
              </div>
            </motion.div>

            {/* Theme */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-xl border border-border/50 p-6">
              <h2 className="font-display font-bold mb-4">Preferência de Tema</h2>
              <div className="flex gap-4">
                <button onClick={() => setTheme("dark")} className={`flex-1 p-4 rounded-lg border-2 transition-all ${theme === "dark" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                  <Moon className="w-6 h-6 mx-auto mb-2" /><p className="text-sm font-medium">Escuro</p>
                </button>
                <button onClick={() => setTheme("light")} className={`flex-1 p-4 rounded-lg border-2 transition-all ${theme === "light" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                  <Sun className="w-6 h-6 mx-auto mb-2" /><p className="text-sm font-medium">Claro</p>
                </button>
              </div>
            </motion.div>

            {/* Address */}
            {address && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl border border-border/50 p-6">
                <div className="flex items-center gap-2 mb-4"><MapPin className="w-5 h-5 text-primary" /><h2 className="font-display font-bold">Endereço Salvo</h2></div>
                <p className="text-muted-foreground">{address.street}, {address.number} - {address.neighborhood}</p>
                <p className="text-muted-foreground">{address.city} - {address.state}, {address.postal_code}</p>
              </motion.div>
            )}

            <Button onClick={handleSave} className="w-full btn-glow gap-2" disabled={saving}>
              <Save className="w-4 h-4" />{saving ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Configuracoes;
