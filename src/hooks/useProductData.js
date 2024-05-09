import { useState, useRef } from "react";
import { getAxiosData } from "../api/product";
import { useProductContext } from "../context/ProductsContext";

const useProductData = () => {
  const { updateProductContext } = useProductContext();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]); // product değişkenini ekledik
  const cache = useRef({});

  const fetchData = async (url) => {
    setIsLoading(true);
    if (cache.current[url]) {
      updateProductContext(cache.current[url]);
      setProduct(cache.current[url]); // product değişkenini güncelledik
      setIsLoading(false);
      return Promise.resolve(cache.current[url]);
    }
    try {
      const data = await getAxiosData(url);
      cache.current[url] = data;
      updateProductContext(data);
      setProduct(data); // product değişkenini güncelledik
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProductById = async (id) => {
    fetchData(`/products?id=${id}`);
  };

  const sortProduct = async (sortBy) => {
    fetchData(`/products?${sortBy}`);
  };

  const getSearchProduct = async (searchTerm) => {
    fetchData(`/products?search=${searchTerm}`);
  };

  const getPagingProduct = async (productcount, index) => {
    fetchData(`/products?p=${index}&l=${productcount}`);
  };

  return {
    getProductById,
    sortProduct,
    getSearchProduct,
    getPagingProduct,
    isLoading,
    product,
  };
};

export default useProductData;
