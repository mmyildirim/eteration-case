import React from "react";

const ProductNotFound = () => {
  return (
    <div className="absolute right-1/2 top-1/2">
      <h1 className="text-2xl text-blue-500 ">Product not found</h1>
      <a href="https://www.eteration.com/" className="text-blue-500 text-lg">
        Plase go back to home page
      </a>
    </div>
  );
};

export default ProductNotFound;
