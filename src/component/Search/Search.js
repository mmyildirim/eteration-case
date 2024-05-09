import React, { useState } from "react";
import useProductData from "../../hooks/useProductData";

const Search = ({ onSearch, productSearch, fw, notSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { getSearchProduct } = useProductData();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    !productSearch && onSearch(e.target.value);
  };
  const handleSubmit = () => {
    (async function () {
      await getSearchProduct(searchTerm);
    })();
  };

  return notSearch ? (
    <div></div>
  ) : (
    <div
      className="relative flex items-center  "
      style={{
        width: productSearch && fw === false ? "50%" : "100%",
        marginBottom: productSearch ? "0" : "20px",
      }}
    >
      {!productSearch && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      )}
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-100 py-1 pl-10 pr-2  text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
        value={searchTerm}
        onChange={handleInputChange}
      />
      {productSearch && (
        <button
          onClick={handleSubmit}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white-500 text-blue-500 px-2 h-full border-l border-gray-400 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Search;
