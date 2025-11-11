import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // cada item: { id, title, price, img, stock, quantity }

  // agregar item al carrito
  const addToCart = (item, quantity) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: Math.min(p.quantity + quantity, p.stock) } : p
        );
      } else {
        return [...prev, { ...item, quantity: Math.min(quantity, item.stock) }];
      }
    });
  };

  // eliminar item
  const removeItem = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  // vaciar carrito
  const clearCart = () => setCart([]);

  // totales
  const totalQuantity = cart.reduce((acc, p) => acc + p.quantity, 0);
  const totalPrice = cart.reduce((acc, p) => acc + p.quantity * Number(p.price), 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      clearCart,
      totalQuantity,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}
