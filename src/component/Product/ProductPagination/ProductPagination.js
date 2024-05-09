import React, { useState } from "react";
import Loading from "../../Loading/Loading";
import useProductData from "../../../hooks/useProductData";

const ProductPagination = ({ productCount }) => {
  const { isLoading, getPagingProduct } = useProductData();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getPagingProduct(productCount, page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 7; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          className={`px-4 py-2 rounded-md mr-2 ${
            currentPage === i ? "bg-gray-500" : "bg-blue-500"
          } text-white`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="flex justify-center my-4">
      {isLoading ? <Loading /> : renderPaginationButtons()}
    </div>
  );
};

export default ProductPagination;
