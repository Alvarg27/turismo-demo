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
    <div style={{ height: height }} className={`w-full relative p-2`}>
      <div className="w-full h-full relative">
        <div
          className={`absolute bottom-0 bg-gradient-to-t w-full h-full from-indigo-600 z-10  transition-height duration-300 rounded-xl flex flex-col-reverse  ${
            isLoaded ? "h-full" : "h-0"
          }`}
        >
          <div
            className={`w-full p-4 duration-500 transition-all delay-300  ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white text-2xl ">{recommendation.title}</p>
            <div className="flex text-white">
              <FaLocationArrow className="my-auto mr-2" />
              <p className="my-auto font-medium">3 km</p>
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
