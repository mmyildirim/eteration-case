import React from "react";
import BasketItem from "./BasketItem";
import useTotalPrice from "../../hooks/useTotalPrice";
const Cart = () => {
  const { basketItems, isBasketEmpty, totalPrice } = useTotalPrice();

  if (isBasketEmpty) {
    return (
      <div>
        <a href="/" className="text-blue-500 text-md">
          Shoping Now
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 text-xs font-semibold  text-gray-500 mt-4">Cart</div>
      <div className="p-4 bg-white shadow-lg rounded">
        {basketItems.map((item) => (
          <BasketItem item={item} />
        ))}
      </div>
      <div className="py-2 mt-3 px-3 bg-white shadow-lg rounded">
        <div className="flex items-center ">
          <h2 className="text-sm">Total Price: </h2>
          <p className="text-blue-500 text-sm ml-1">{totalPrice}₺</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
