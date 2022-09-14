import Image from "next/image";
import React from "react";
import { FaPlane } from "react-icons/fa";
import image from "../public/turismo.webp";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div className="h-[100px] w-full relative bg-indigo-700 z-[50] mb-10">
      <div className="left-1/2 -translate-x-1/2 absolute mt-4 text-white flex">
        <FaPlane className="m-auto text-4xl mr-2" />
        <p className="my-auto text-xl">Turismo</p>
      </div>
      <SearchBar className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 px-4" />
    </div>
  );
};

export default Banner;
