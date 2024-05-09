import React, { useEffect, useState } from "react";
import Cart from "../component/Cart/Basket";
import Header from "../component/Header/Header";
import { useParams } from "react-router-dom";
import useProductData from "../hooks/useProductData";
import AddToCart from "../component/Product/AddToCart/AddToCart";
import { useProductContext } from "../context/ProductsContext";
import ProductNotFound from "../component/ProductNotFound/ProductNotFound";
import Loading from "../component/Loading/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById, isLoading } = useProductData();
  const { productContext } = useProductContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async function () {
      await getProductById(id);
      setIsReady(true);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isReady && productContext ? (
            <>
              <Header notSearch={true} />
              <div className=" mt-7">
                <div className="grid grid-cols-12 mt-3">
                  <div className="col-span-12 md:col-span-12 lg:col-span-9 flex justify-center">
                    <div className="flex p-4 bg-white shadow-lg rounded container">
                      <div className="grid grid-cols-12 mt-3">
                        <div className="col-span-12 md:col-span-12 lg:col-span-6 mt-2">
                          <img
                            src={productContext[0]?.image}
                            alt={productContext[0]?.name}
                            style={{ maxWidth: "100%", width: "100%" }}
                            className="object-contain pr-4"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-12 lg:col-span-6 mt-2">
                          <div>
                            <h2 className="lg:text-2xl text-lg   mb-2">
                              {productContext[0]?.name}
                            </h2>
                            <p className="text-blue-500  lg:text-2xl text-lg mb-4">
                              {productContext[0]?.price}
                            </p>
                            <AddToCart product={productContext[0]} />
                            <p className="text-lg  mt-3 mb-1">
                              {productContext[0].description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 mobil-hidden">
                    <Cart />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <ProductNotFound />
          )}
        </>
      )}
    </>
  );
};

export default ProductDetail;
