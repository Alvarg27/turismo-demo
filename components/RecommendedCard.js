import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHeart, FaLocationArrow } from "react-icons/fa";
import experimental from "../public/experimental.webp";

const RecommendedCard = ({ show }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!show) {
      return;
    }
    if (!imageLoaded) {
      return;
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, [show, imageLoaded]);

  return (
    <div className="absolute shadow-lg w-full h-[500px] rounded-xl overflow-hidden bg-gray-200">
      <Image
        layout="fill"
        className="rounded-xl"
        objectFit="cover"
        src={experimental}
        onLoad={() => setImageLoaded(true)}
      />
      <div
        className={`absolute top-2 right-2 text-white bg-rose-400 h-[40px] w-[40px] flex rounded-full shadow-md transition duration-300 delay-300 ${
          isLoaded ? "opacity-100 translate-x-0" : "translate-x-full opacity-0"
        }`}
      >
        <FaHeart
          className={`m-auto text-xl transition duration-300 delay-300 ${
            isLoaded ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <div
        className={`w-full absolute bottom-0 flex flex-col-reverse justify-between bg-gradient-to-t transition-all duration-500 from-indigo-700 to-transparent ${
          isLoaded ? " h-full" : "h-0"
        }`}
      >
        <div
          className={`w-full p-4 duration-300 transition-all delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-2xl">Festival experimental</p>
          <div className="flex text-white">
            <FaLocationArrow className="my-auto mr-2" />
            <p className="my-auto font-medium">3 km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;