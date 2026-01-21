import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Carrinho = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/auth?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto text-center py-20"
            >
              <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold mb-4">
                Seu carrinho está vazio
              </h1>
              <p className="text-muted-foreground mb-8">
                Parece que você ainda não encontrou sua relíquia. 
                Explore nossa coleção e encontre o artefato perfeito para você.
              </p>
              <Link to="/reliquias">
                <Button className="btn-glow gap-2">
                  Explorar Relíquias
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Seu <span className="gradient-text">Carrinho</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              {items.length} {items.length === 1 ? "relíquia selecionada" : "relíquias selecionadas"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border/50 p-4 flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="text-xs text-primary font-medium uppercase">
                          {item.product.universe}
                        </p>
                        <h3 className="font-semibold truncate">{item.product.name}</h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      {/* Price */}
                      <p className="font-bold text-lg gradient-text">
                        R$ {(item.product.price * item.quantity).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-xl border border-border/50 p-6 sticky top-24">
                <h2 className="font-display text-xl font-bold mb-6">Resumo do Pedido</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Envio Dimensional</span>
                    <span className="text-primary">Grátis</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="gradient-text text-xl">
                      R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full btn-glow gap-2 py-6"
                  onClick={handleCheckout}
                >
                  {isAuthenticated ? "Finalizar Compra" : "Entrar para Finalizar"}
                  <ArrowRight className="w-4 h-4" />
                </Button>

                {!isAuthenticated && (
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Você precisa estar logado para finalizar a compra.
                  </p>
                )}

                <Button
                  variant="ghost"
                  className="w-full mt-4 text-muted-foreground hover:text-destructive"
                  onClick={clearCart}
                >
                  Limpar Carrinho
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

export default Carrinho;
