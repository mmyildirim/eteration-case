import React from "react";
import { useCart } from "../../../context/CartContext";

const AddToCart = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };
  return (
    <div>
      <button
        onClick={(event) => {
          event.stopPropagation();
          handleAddToCart(product);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full z-100"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
