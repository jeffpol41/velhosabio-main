import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

type AuthMode = "login" | "register";

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate(redirect === "checkout" ? "/checkout" : "/");
    return null;
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (mode === "register" && !formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (mode === "login") {
        const result = await login(formData.email, formData.password);
        if (!result.success) {
          toast({
            title: "Erro ao entrar",
            description: result.error || "Email ou senha incorretos. Tente novamente.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Bem-vindo de volta!",
            description: "Você está agora conectado à rede dimensional.",
          });
          navigate(redirect === "checkout" ? "/checkout" : "/");
        }
      } else {
        const result = await register(formData.name, formData.email, formData.password);
        if (!result.success) {
          toast({
            title: "Erro ao cadastrar",
            description: result.error || "Erro ao criar conta. Tente novamente.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Conta criada com sucesso!",
            description: "Você está agora conectado à rede dimensional.",
          });
          navigate(redirect === "checkout" ? "/checkout" : "/");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl font-bold mb-2">
                {mode === "login" ? "Bem-vindo de Volta" : "Criar Conta"}
              </h1>
              <p className="text-muted-foreground">
                {mode === "login"
                  ? "Entre para acessar sua coleção dimensional"
                  : "Registre-se para se tornar um guardião de relíquias"}
              </p>
            </div>

            {/* Form */}
            <div className="bg-card rounded-xl border border-border/50 p-6 glow-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "register" && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        className="pl-10"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-destructive">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full btn-glow py-6"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Processando..."
                    : mode === "login"
                    ? "Entrar"
                    : "Criar Conta"}
                </Button>
              </form>

              {/* Toggle Mode */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {mode === "login" ? "Não tem uma conta?" : "Já possui uma conta?"}{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline font-medium"
                    onClick={() => setMode(mode === "login" ? "register" : "login")}
                  >
                    {mode === "login" ? "Cadastre-se" : "Entrar"}
                  </button>
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground/60 text-center mt-6">
              Este é um site fictício para fins educacionais e demonstrativos.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
