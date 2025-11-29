 import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (id) => {
    const exist = cart.find((item) => item._id === id);

    if (exist.qty === 1) {
      setCart(cart.filter((item) => item._id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item._id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};