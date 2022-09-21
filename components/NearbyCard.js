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
    <div className="relative h-[340px] w-[280px] mx-2 bg-gray-100 rounded-xl shadow-lg">
      <div
        className="flex absolute z-[20] p-3 rounded-full top-4 left-4"
        style={{ background: item.background }}
      >
        <FontAwesome
          style={{ color: item.color }}
          name={item.icon}
          className="text-xl"
        />
      </div>
      <div className="h-full w-full absolute z-10 rounded-xl bg-opacity-80 flex flex-col-reverse p-4 justify-between">
        <div className="bg-white p-4 rounded-lg relative">
          <div className="flex shadow-md m-auto absolute z-10 bg-white rounded-full text-sm px-4 py-2 right-2 -top-5">
            <FaLocationArrow className="my-auto mr-2 text-indigo-400" />
            <p className="my-auto font-medium">{item.distance} km</p>
          </div>
          <p className=" text-xl">{item.title}</p>
          <p className="text-gray-500 text-sm">{item.address}</p>
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
