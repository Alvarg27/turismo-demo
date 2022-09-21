import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaLocationArrow } from "react-icons/fa";

const RecommendedCard = ({ recommendation, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div style={{ height: height }} className={`w-full relative p-1`}>
      <div className="w-full h-full relative">
        <div
          className={`absolute bottom-0 bg-gradient-to-t w-full  from-black z-10  transition-height duration-300 rounded-xl  opacity-60 ${
            isLoaded ? "h-full" : "h-0"
          }`}
        ></div>
        <div
          className={`absolute w-full h-full  z-10  rounded-xl flex flex-col-reverse }`}
        >
          <div
            className={`w-full p-4 duration-500 transition-all delay-300  ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white text-xl ">{recommendation.title}</p>
            <div className="inline-flex bg-white p-1 rounded-full text-sm mt-2">
              <FaLocationArrow className="my-auto mr-2 text-indigo-400" />
              <p className="my-auto font-medium text-gray-500">
                {recommendation.distance} km
              </p>
            </div>
          </div>
        </div>

        <Image
          layout="fill"
          objectFit="cover"
          className={` transition duration-1000 rounded-xl ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={recommendation.image}
          priority={true}
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default RecommendedCard;
