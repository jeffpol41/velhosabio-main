import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Package, ChevronRight, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  delivery_address_snapshot: { city?: string; state?: string } | null;
}

const statusLabels: Record<string, { label: string; color: string }> = {
  pending: { label: "Pendente", color: "text-yellow-500" },
  confirmed: { label: "Confirmado", color: "text-blue-500" },
  shipped: { label: "Enviado", color: "text-purple-500" },
  completed: { label: "Concluído", color: "text-green-500" },
};

const Pedidos = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth?redirect=pedidos");
    }
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    if (user) {
      supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .then(({ data }) => {
          setOrders((data as Order[]) || []);
          setLoadingOrders(false);
        });
    }
  }, [user]);

  if (isLoading || loadingOrders) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-pulse text-primary">Carregando...</div></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold">Meus <span className="gradient-text">Pedidos</span></h1>
            <p className="text-muted-foreground mt-2">Acompanhe suas aquisições dimensionais.</p>
          </motion.div>

          {orders.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-xl font-bold mb-2">Nenhum pedido encontrado</h2>
              <p className="text-muted-foreground">Você ainda não fez nenhuma aquisição dimensional.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, index) => (
                <motion.div key={order.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => {}}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-display font-bold">Pedido #{order.id.slice(0, 8)}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {new Date(order.created_at).toLocaleDateString("pt-BR")}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-4">
                      <div>
                        <p className={`text-sm font-medium ${statusLabels[order.status]?.color || "text-muted-foreground"}`}>{statusLabels[order.status]?.label || order.status}</p>
                        <p className="font-bold gradient-text">R$ {Number(order.total_amount).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pedidos;
