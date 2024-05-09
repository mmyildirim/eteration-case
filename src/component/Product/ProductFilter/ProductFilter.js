import React, { useEffect, useState } from "react";
import Search from "../../Search/Search";
import useSearch from "../../../hooks/useSearch";
import { useProductContext } from "../../../context/ProductsContext";
import CustomModal from "../../CustomModal/CustomModal";

const ProductFilter = ({ mode, selectedItems, setSelectedItems }) => {
  const { productContext } = useProductContext();
  const [filterDataList, setFilterDataList] = useState([]);
  const [searchTerm, searchResults, handleSearch] = useSearch(filterDataList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (mode === "brand") {
      if (Array.isArray(productContext)) {
        setFilterDataList([
          ...new Set(productContext.map((product) => product.brand)),
        ]);
      } else {
        setFilterDataList([]);
      }
    } else if (mode === "model") {
      if (Array.isArray(productContext)) {
        setFilterDataList([
          ...new Set(productContext.map((product) => product.model)),
        ]);
      } else {
        setFilterDataList([]);
      }
    } else {
      setFilterDataList([]);
    }
  }, [mode, productContext]);

  const handleCheckboxChange = (mode) => (e) => {
    const item = e.target.value;
    const selectedItemsArray =
      selectedItems && selectedItems[mode] ? selectedItems[mode] : [];
    const newSelectedItems = {
      ...selectedItems,
      [mode]: e.target.checked
        ? [...selectedItemsArray, item]
        : selectedItemsArray.filter((val) => val !== item),
    };
    setSelectedItems(newSelectedItems);
  };

  const renderCheckbox = (item, index) => {
    const selectedItemsArray =
      selectedItems && selectedItems[mode] ? selectedItems[mode] : [];
    return (
      <div key={index} className="my-1">
        <label className="flex items-center">
          <input
            type="checkbox"
            value={item}
            checked={selectedItemsArray.includes(item)}
            onChange={handleCheckboxChange(mode)}
            className="form-checkbox text-blue-500 border-blue-500 w-3 h-3"
          />
          <span className="text-lg text-sm overflow-hidden max-h-10 line-clamp-3  ml-2">
            {item}
          </span>
        </label>
      </div>
    );
  };
  const renderFilterData = () => {
    return (
      <>
        <div className="text-xs font-semibold  text-gray-500 mt-4">
          {mode === "brand" ? "Brands" : "Model"}
        </div>
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white  shadow-md sm:max-w-lg lg:max-w-full">
            <div className="p-4 overflow-y-auto h-64 custom-scrollbar sm:h-72 lg:h-80">
              <Search onSearch={handleSearch} searchTerm={searchTerm} />
              {searchResults.length > 0
                ? searchResults.map((product, index) =>
                    renderCheckbox(product, index)
                  )
                : filterDataList.map((product, index) =>
                    renderCheckbox(product, index)
                  )}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="mobil-hidden">{renderFilterData()}</div>
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
          {mode} Filtered
        </button>
        <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
          {renderFilterData()}
        </CustomModal>
      </div>
    </div>
  );
};

export default ProductFilter;
