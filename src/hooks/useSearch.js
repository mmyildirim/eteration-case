import { useState } from "react";

const useSearch = (initialData) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(initialData);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredResults = initialData.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return [searchTerm, searchResults, handleSearch];
};

export default useSearch;
