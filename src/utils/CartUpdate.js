export const formatNumber = (number) => {
  const options = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formattedNumber = number.toLocaleString("tr-TR", options);
  return formattedNumber;
};

export const calculateTotalPrice = (items) => {
  if (!items || items.length === 0) {
    return "0.00";
  }

  const totalPrice = items.reduce((total, item) => {
    if (item && item.price !== undefined && item.quantity !== undefined) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);

  return formatNumber(totalPrice);
};

export const getTotalQuantity = (items) => {
  if (!items) {
    return 0;
  }

  const totalQuantity = items.reduce(
    (acc, item) => acc + (item?.quantity || 0),
    0
  );
  return totalQuantity;
};
