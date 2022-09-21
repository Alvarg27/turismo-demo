import React from "react";
import { FaPlane } from "react-icons/fa";
import Banner from "./Banner";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="sticky top-0 z-[40] mb-[75px]">
        <div className="flex h-[30px] bg-blue-700">
          <div className="m-auto text-white flex mt-[0px]">
            <FaPlane className="m-auto text-2xl mr-2" />
            <p className="my-auto text-xl">Turismo</p>
          </div>
        </div>

        <div className="w-full bg-blue-700 z-[50] mb-10 h-[40px] absolute">
          <SearchBar className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 px-4" />
        </div>
      </div>

      {children}
    </div>
  );
};

export default Layout;
