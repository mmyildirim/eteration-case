import { useState, useEffect } from "react";
import { calculateTotalPrice } from "../utils/CartUpdate";
import { useCart } from "../context/CartContext";

const useTotalPrice = () => {
  const { state } = useCart();
  const [basketItems, setBasketItems] = useState([]);
  const [isBasketEmpty, setIsBasketEmpty] = useState(false);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    if (state.items.length > 0) {
      setBasketItems(state.items);
      setIsBasketEmpty(false);
      const calculeteTotalPriceValue = calculateTotalPrice(state.items);
      setTotalPrice(calculeteTotalPriceValue);
    } else {
      setIsBasketEmpty(true);
    }
  }, [state.items]);

  return { basketItems, isBasketEmpty, totalPrice };
};

export default useTotalPrice;
