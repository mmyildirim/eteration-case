import React from "react";
import { createContext, useReducer, useContext } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        const newState = state.items.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        localStorage.setItem("cart", JSON.stringify(newState));
        return {
          ...state,
          items: newState,
        };
      } else {
        const newState = [...state.items, { ...action.payload, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(newState));
        return {
          ...state,
          items: newState,
        };
      }

    case "REMOVE_ITEM":
      const newRemoveItems = state.items.map((item) =>
        item.id === action.payload && item.quantity >= 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      const filteredRemoveItems = newRemoveItems.filter(
        (item) => item.quantity !== 0
      );
      localStorage.setItem("cart", JSON.stringify(filteredRemoveItems));
      return {
        ...state,
        items: filteredRemoveItems,
      };

    case "CLEAR_FROM_CART":
      const clearItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(clearItems));
      return {
        ...state,
        items: clearItems,
      };
    default:
      return state;
  }
};

const initialCartState = {
  items: JSON.parse(
    (typeof window !== "undefined" && window.localStorage.getItem("cart")) ||
      "[]"
  ),
};
const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
