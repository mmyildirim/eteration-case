import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import Loading from "../../Loading/Loading";
import { useProductContext } from "../../../context/ProductsContext";

const ProductBox = ({ selectedItems }) => {
  const { productContext, isLoading } = useProductContext();
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const brands = selectedItems.brand;
    const models = selectedItems.model;
    const filteredProducts = productContext.filter((product) => {
      return (
        (brands.length === 0 || brands.includes(product.brand)) &&
        (models.length === 0 || models.includes(product.model))
      );
    });

    setFilteredProducts(filteredProducts);
  }, [selectedItems, productContext]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="grid grid-cols-12 mt-3 gap-2">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 col-span-12 flex flex-col justify-between bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-200 ease-in cursor-pointer"
          onClick={() => {
            navigate(`${product.id}`);
          }}
        >
          <img
            src={product.image}
            alt={product.description}
            className="w-full object-cover mb-4"
          />
          <div className="mb-1">
            <p className="text-blue-500 text-sm overflow-hidden max-h-10 mb-1">
              {product.price} ₺
            </p>
            <h2 className="text-lg text-sm overflow-hidden max-h-10 line-clamp-3 mb-1">
              {product.name}
            </h2>
          </div>
          <AddToCart product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductBox;
