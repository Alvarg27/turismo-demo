import React from "react";
import { FaPlane } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="sticky top-0 z-[40] mb-[75px]">
      <div className="flex h-[60px] bg-blue-700">
        <div className="m-auto text-white flex">
          <FaPlane className="m-auto text-2xl mr-2" />
          <p className="my-auto text-xl">Turismo</p>
        </div>
      </div>
      <div className="w-full bg-blue-700 z-[50] h-[25px] absolute">
        <SearchBar className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 px-4" />
      </div>
    </div>
  );
};

export default Header;
