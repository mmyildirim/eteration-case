import React from "react";
import { useCart } from "../../context/CartContext";
const BasketItem = ({ item }) => {
  const { dispatch } = useCart();

  const handleAddToCartItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const handleDeleteToCartItem = (id) => {
    dispatch({ type: "CLEAR_FROM_CART", payload: id });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded">
      <div
        key={item.id}
        className="flex items-center justify-between py-2 border-b"
      >
        <div>
          <h2 className="text-lg text-sm overflow-hidden max-h-10 line-clamp-3 mb-1">
            {item.name}
          </h2>

          <p className="text-blue-500 text-xs">{item.price}₺</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => handleRemoveFromCart(item.id)}
            className="bg-gray-200 text-black px-2 py-1 rounded-l"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-4 m-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
          </button>
          <p className="bg-blue-500 text-white px-3 py-1">{item.quantity}</p>
          <button
            onClick={() => handleAddToCartItem(item)}
            className="bg-gray-200 text-black px-1 py-1 rounded-r"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-4 m-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <button
            className="ml-2"
            onClick={() => handleDeleteToCartItem(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
