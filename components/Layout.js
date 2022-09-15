import React from "react";
import { FaPlane } from "react-icons/fa";
import Banner from "./Banner";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <div className="h-[1000px]  bg-gray-800 relative">
      <div className="flex h-[50px] bg-indigo-700">
        <div className="m-auto text-white flex mt-[15px]">
          <FaPlane className="m-auto text-4xl mr-2" />
          <p className="my-auto text-xl">Turismo</p>
        </div>
      </div>

      <div className="w-full bg-indigo-700 z-[50] mb-10 h-[40px] sticky top-0">
        <SearchBar className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 px-4" />
      </div>
      {children}
    </div>
  );
};

export default Layout;
