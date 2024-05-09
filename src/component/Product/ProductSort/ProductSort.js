import React, { useState } from "react";
import useProductData from "../../../hooks/useProductData";
import CustomModal from "../../CustomModal/CustomModal";

const ProductSort = () => {
  const [sortBy, setSortBy] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { sortProduct } = useProductData();
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    sortProduct(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const productSortRender = () => {
    return (
      <>
        <div className="text-xs font-semibold  text-gray-500 mt-4">Sort By</div>
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div>
                <label className="flex items-center my-1">
                  <input
                    type="radio"
                    name="sortBy"
                    value="sortBy=createdAt&order=asc"
                    checked={sortBy === "sortBy=createdAt&order=asc"}
                    onChange={handleSortChange}
                    className="form-radio text-blue-500 border-blue-500 w-3 h-3"
                  />
                  <span className="text-lg text-sm overflow-hidden max-h-10 line-clamp-3  ml-2">
                    Old to New
                  </span>
                </label>
              </div>
              <div>
                <label className="flex items-center my-1">
                  <input
                    type="radio"
                    name="sortBy"
                    value="sortBy=createdAt&order=desc"
                    checked={sortBy === "sortBy=createdAt&order=desc"}
                    onChange={handleSortChange}
                    className="form-radio text-blue-500 w-3 h-3"
                  />
                  <span className="text-lg text-sm overflow-hidden max-h-10 line-clamp-3  ml-2">
                    New to Old
                  </span>
                </label>
              </div>
              <div>
                <label className="flex items-center my-1">
                  <input
                    type="radio"
                    name="sortBy"
                    value="sortBy=price&order=asc"
                    checked={sortBy === "sortBy=price&order=asc"}
                    onChange={handleSortChange}
                    className="form-radio text-blue-500 w-3 h-3"
                  />
                  <span className="text-lg text-sm overflow-hidden max-h-10 line-clamp-3  ml-2">
                    Price High to Low
                  </span>
                </label>
              </div>
              <div>
                <label className="flex items-center my-1">
                  <input
                    type="radio"
                    name="sortBy"
                    value="sortBy=price&order=desc"
                    checked={sortBy === "sortBy=price&order=desc"}
                    onChange={handleSortChange}
                    className="form-radio text-blue-500 w-3 h-3"
                  />
                  <span className="text-lg text-sm overflow-hidden max-h-10 line-clamp-3  ml-2">
                    Price Low to High
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="mobil-hidden">{productSortRender()}</div>
      <div className="web-hidden">
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md capitalize flex items-center w-full justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          Sort By
        </button>
        <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
          {productSortRender()}
        </CustomModal>
      </div>
    </div>
  );
};

export default ProductSort;
