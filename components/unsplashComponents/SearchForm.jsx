import React from "react";
import { UseUnsplashGlobalContext } from "../../context/UnsplashGlobalContext";

function SearchForm() {
  const { setSearchTerm } = UseUnsplashGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    setSearchTerm(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        className="p-2 dark:text-black"
        type="text"
        name="search"
        id="search"
        placeholder="cat"
      />
      <button
        type="submit"
        className="btn bg-purple-700 text-white w-fit hover:bg-purple-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
