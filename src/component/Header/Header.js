import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import useTotalPrice from "../../hooks/useTotalPrice";
import { useCart } from "../../context/CartContext";
import { getTotalQuantity } from "../../utils/CartUpdate";
import CustomModal from "../CustomModal/CustomModal";
import Cart from "../Cart/Basket";

function Header({ notSearch }) {
  const { totalPrice } = useTotalPrice();
  const [totalQuantity, setTotalQuantity] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { state } = useCart();
  useEffect(() => {
    if (state.items.length > 0) {
      const quantity = getTotalQuantity(state.items);
      setTotalQuantity(quantity);
    } else {
      setTotalQuantity(0);
    }
  }, [state.items]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <header className="bg-blue-600 px-1 xl:px-10 lg:px-10 py-1">
        <div className="grid grid-cols-12 flex items-center">
          <div className="col-span-6 lg:col-span-6">
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-md font-bold text-white pr-5">
                <a href="/">Eteration</a>
              </h1>
              {!notSearch && (
                <div className="mobil-hidden" style={{ width: "70%" }}>
                  <Search productSearch={true} />
                </div>
              )}
            </div>
          </div>
          <div className="col-span-6 lg:col-span-6">
            <div className="flex items-center justify-end">
              <div className="flex items-center">
                <div
                  className="relative cursor-pointer"
                  onClick={handleOpenModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-1 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  <div
                    style={{ right: "-5%", top: "-33%" }}
                    className="absolute bg-white text-blue-500   rounded-full w-4 h-4  flex items-center justify-center"
                  >
                    <span style={{ fontSize: "10px" }}>{totalQuantity}</span>
                  </div>
                </div>

                <div>
                  <p className="text-white text-md">{totalPrice}₺</p>
                </div>
              </div>
              <div className="flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <p className="text-white text-md">Kerem</p>
              </div>
            </div>
          </div>
        </div>
        {!notSearch && (
          <div className="web-hidden w-full">
            <Search productSearch={true} wf={true} />
          </div>
        )}
      </header>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Cart />
      </CustomModal>
    </div>
  );
}

export default Header;
