import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import FontAwesome from "./FontAwesome";

const NearbyCard = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="relative h-[300px] w-[250px] mx-2 bg-gray-100 rounded-xl shadow-lg">
      <div className="bg-indigo-700 h-full w-full absolute z-10 rounded-xl bg-opacity-80 flex flex-col p-4 justify-between">
        <FontAwesome name={item.icon} className="text-2xl text-white" />
        <div>
          <p className="text-white text-xl">{item.title}</p>
          <p className="text-gray-300 text-sm">{item.address}</p>
        </div>
      </div>
      <div className=" h-full w-full absolute z-[11] flex">
        <div className="flex flex-col text-white m-auto">
          <FaLocationArrow className="m-auto text-2xl" />
          <p className="m-auto font-medium text-2xl mt-2">{item.distance} km</p>
        </div>
      </div>
      <Image
        layout="fill"
        objectFit="cover"
        className={` transition duration-1000 rounded-xl ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={item.image}
        priority={true}
        onLoadingComplete={handleImageLoad}
      />
    </div>
  );
};

export default NearbyCard;
