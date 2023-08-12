"use client";

import { createContext, useState } from "react";

const ShoppingCartContext = createContext([]);

const CartContext = ({ children }) => {
  const [cart, setCart] = useState();
  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default CartContext;

export const useCartContext = () => useContext(ShoppingCartContext);
