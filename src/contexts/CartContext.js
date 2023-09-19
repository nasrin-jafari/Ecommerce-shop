import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalPrice(total);
  });
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 };
    //check if item is already in card
    const isItemInCart = cart.find((item) => {
      return item.id === id;
    });
    if (isItemInCart) {
      setCart(
        cart.map((cartitem) =>
          cartitem.id === id
            ? { ...cartitem, amount: cartitem.amount + 1 }
            : cartitem
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  };
  // console.log(cart);
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(id, cartItem);
  };
  const decreaseAmount = (id) => {
    const isItemInCart = cart.find((item) => item.id === id);
    if (isItemInCart) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                amount: item.amount - 1,
              }
            : item
        )
      );
    }
    if (isItemInCart.amount < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
