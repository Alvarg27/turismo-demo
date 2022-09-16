import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ className }) => {
  return (
    <div className={`${className} w-full`}>
      <div className="relative shadow-lg rounded-lg">
        <FaSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-xl text-gray-400 " />
        <input
          placeholder="Busca lugares o eventos"
          className="bg-white w-full rounded-lg h-[50px] px-12 "
        />
      </div>
    </div>
  );
};

export default SearchBar;
