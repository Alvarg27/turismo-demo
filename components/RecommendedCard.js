import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaLocationArrow } from "react-icons/fa";

const RecommendedCard = ({ show, recommendation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  console.log(imageLoaded);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`shadow-xl min-w-full relative px-4`}>
      <div className="rounded-xl bg-gray-700 relative h-[400px] ">
        <div
          className={`absolute top-2 right-2 text-white bg-rose-400 h-[40px] w-[40px] flex rounded-full shadow-md transition duration-300 delay-300 z-[11] ${
            isLoaded
              ? "opacity-100 translate-x-0"
              : "translate-x-full opacity-0"
          }`}
        >
          <FaHeart
            className={`m-auto text-xl transition duration-300 delay-300 ${
              isLoaded ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
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
          ref={imageRef}
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
