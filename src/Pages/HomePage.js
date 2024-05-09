import React, { useState } from "react";
import Header from "../component/Header/Header";
import ProductSort from "../component/Product/ProductSort/ProductSort";
import ProductFilter from "../component/Product/ProductFilter/ProductFilter";
import Cart from "../component/Cart/Basket";
import ProductBox from "../component/Product/ProductBox/ProductBox";
import { useProductContext } from "../context/ProductsContext";
import Loading from "../component/Loading/Loading";
import ProductNotFound from "../component/ProductNotFound/ProductNotFound";
import ProductPagination from "../component/Product/ProductPagination/ProductPagination";

const HomePage = () => {
  const { productContext, isLoading } = useProductContext();
  const [selectedItems, setSelectedItems] = useState({ brand: [], model: [] });

  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {productContext ? (
            <>
              <Header />
              <div className="container m-auto">
                <div className="grid grid-cols-12  mt-3 gap-2 ">
                  <div className="col-span-12 md:col-span-12 lg:col-span-3">
                    <div className="my-2">
                      <ProductSort />
                    </div>
                    <div className="my-2">
                      <ProductFilter
                        mode={"brand"}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                      />
                    </div>
                    <div className="my-2">
                      <ProductFilter
                        mode={"model"}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6  ">
                    <ProductBox selectedItems={selectedItems} />
                  </div>
                  <div className="col-span-3 mobil-hidden">
                    <Cart />
                  </div>
                </div>
              </div>
              {productContext.length <= 12 &&
                !selectedItems.brand.length &&
                !selectedItems.model.length && (
                  <ProductPagination productCount={12} />
                )}
            </>
          ) : (
            <ProductNotFound />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
