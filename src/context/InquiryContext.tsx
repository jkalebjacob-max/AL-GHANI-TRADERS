import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  getQuantity: (productId: string) => number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("alghani_cart");
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved) as unknown[];
      if (!Array.isArray(parsed)) return [];
      return parsed
        .map((item) => {
          if (
            typeof item === "object" &&
            item !== null &&
            "product" in item &&
            "quantity" in item
          ) {
            const candidate = item as CartItem;
            return candidate.quantity > 0 ? candidate : null;
          }

          // Migration: legacy stored value was Product[] without quantity.
          if (typeof item === "object" && item !== null && "id" in item) {
            return { product: item as Product, quantity: 1 };
          }

          return null;
        })
        .filter((entry): entry is CartItem => entry !== null);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("alghani_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productId: string) => {
    return !!cartItems.find((item) => item.product.id === productId);
  };

  const getQuantity = (productId: string) => {
    return cartItems.find((item) => item.product.id === productId)?.quantity ?? 0;
  };

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((open) => !open);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        subtotal,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        getQuantity,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

// Backward-compatible aliases while migrating file names.
export const InquiryProvider = CartProvider;
export const useInquiry = useCart;
