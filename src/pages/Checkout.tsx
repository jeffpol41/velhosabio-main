import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Home, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface AddressForm {
  full_name: string;
  postal_code: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { isAuthenticated, user, profile, isLoading } = useAuth();
  const navigate = useNavigate();
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [address, setAddress] = useState<AddressForm>({
    full_name: "",
    postal_code: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth?redirect=checkout");
    }
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    if (profile?.name) {
      setAddress(prev => ({ ...prev, full_name: profile.name || "" }));
    }
  }, [profile]);

  const validateAddress = () => {
    const newErrors: Record<string, string> = {};
    if (!address.full_name.trim()) newErrors.full_name = "Nome é obrigatório";
    if (!address.postal_code.trim()) newErrors.postal_code = "CEP é obrigatório";
    if (!address.street.trim()) newErrors.street = "Rua é obrigatória";
    if (!address.number.trim()) newErrors.number = "Número é obrigatório";
    if (!address.neighborhood.trim()) newErrors.neighborhood = "Bairro é obrigatório";
    if (!address.city.trim()) newErrors.city = "Cidade é obrigatória";
    if (!address.state.trim()) newErrors.state = "Estado é obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmOrder = async () => {
    if (!validateAddress()) {
      toast({ title: "Preencha o endereço", description: "Todos os campos obrigatórios devem ser preenchidos.", variant: "destructive" });
      return;
    }

    if (!user) return;
    setIsSubmitting(true);

    try {
      // Save address
      const { data: savedAddress } = await supabase
        .from("delivery_addresses")
        .insert({ user_id: user.id, ...address, is_default: true })
        .select()
        .single();

      // Create order
      const { data: order } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          total_amount: totalPrice,
          delivery_address_id: savedAddress?.id,
          delivery_address_snapshot: address,
          status: "pending",
        })
        .select()
        .single();

      if (order) {
        // Add order items
        await supabase.from("order_items").insert(
          items.map(item => ({
            order_id: order.id,
            product_id: item.product.id,
            product_name: item.product.name,
            product_image: item.product.image,
            quantity: item.quantity,
            unit_price: item.product.price,
          }))
        );
      }

      clearCart();
      setOrderCompleted(true);
      toast({ title: "Pedido confirmado!", description: "Suas relíquias estão a caminho." });
    } catch (error) {
      toast({ title: "Erro", description: "Não foi possível processar o pedido.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-pulse text-primary">Carregando...</div></div>;

  if (orderCompleted || items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center py-20">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h1 className="font-display text-2xl font-bold mb-4">Pedido Confirmado!</h1>
              <p className="text-muted-foreground mb-8">Suas relíquias estão sendo preparadas para transporte dimensional.</p>
              <Link to="/"><Button className="btn-glow gap-2"><Home className="w-4 h-4" />Voltar ao Início</Button></Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold">Finalizar <span className="gradient-text">Compra</span></h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {/* Address Form */}
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-lg font-bold">Endereço de Entrega</h2>
                </div>
                <div className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><Label>Nome Completo *</Label><Input value={address.full_name} onChange={e => setAddress({...address, full_name: e.target.value})} />{errors.full_name && <p className="text-xs text-destructive mt-1">{errors.full_name}</p>}</div>
                    <div><Label>CEP *</Label><Input value={address.postal_code} onChange={e => setAddress({...address, postal_code: e.target.value})} />{errors.postal_code && <p className="text-xs text-destructive mt-1">{errors.postal_code}</p>}</div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2"><Label>Rua *</Label><Input value={address.street} onChange={e => setAddress({...address, street: e.target.value})} />{errors.street && <p className="text-xs text-destructive mt-1">{errors.street}</p>}</div>
                    <div><Label>Número *</Label><Input value={address.number} onChange={e => setAddress({...address, number: e.target.value})} />{errors.number && <p className="text-xs text-destructive mt-1">{errors.number}</p>}</div>
                  </div>
                  <div><Label>Complemento</Label><Input value={address.complement} onChange={e => setAddress({...address, complement: e.target.value})} placeholder="Apto, bloco, etc." /></div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div><Label>Bairro *</Label><Input value={address.neighborhood} onChange={e => setAddress({...address, neighborhood: e.target.value})} />{errors.neighborhood && <p className="text-xs text-destructive mt-1">{errors.neighborhood}</p>}</div>
                    <div><Label>Cidade *</Label><Input value={address.city} onChange={e => setAddress({...address, city: e.target.value})} />{errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}</div>
                    <div><Label>Estado *</Label><Input value={address.state} onChange={e => setAddress({...address, state: e.target.value})} maxLength={2} />{errors.state && <p className="text-xs text-destructive mt-1">{errors.state}</p>}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="bg-card rounded-xl border border-border/50 p-6 sticky top-24">
                <h2 className="font-display text-lg font-bold mb-6">Resumo do Pedido</h2>
                <div className="space-y-4 mb-6 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0"><img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" /></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qtd: {item.quantity}</p>
                        <p className="text-sm font-bold gradient-text">R$ {(item.product.price * item.quantity).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Envio</span><span className="text-primary">Grátis</span></div>
                  <div className="border-t border-border pt-3 flex justify-between font-bold"><span>Total</span><span className="gradient-text text-xl">R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span></div>
                </div>
                <Button className="w-full btn-glow gap-2 py-6" onClick={handleConfirmOrder} disabled={isSubmitting}>
                  {isSubmitting ? "Processando..." : "Confirmar Pedido"}<ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
