import React, { createContext, useContext, useState, useEffect } from "react";
import { getAxiosData } from "../api/product"; // getAxiosData işlevini import edin

const ProductContext = createContext([]);

const updateProductContext = (newData, setProductContext) => {
  setProductContext(newData);
};

export const ProductContextProvider = ({ children }) => {
  const [productContext, setProductContext] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getInitalProductData = async () => {
    setIsLoading(true);
    const getProductListData = await getAxiosData(`/products?p=1&l=12`);
    updateProductContext(getProductListData, setProductContext);
    setIsLoading(false);
  };
  useEffect(() => {
    getInitalProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productContext,
        isLoading,
        updateProductContext: (newData) =>
          updateProductContext(newData, setProductContext),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider"
    );
  }
  return context;
};
