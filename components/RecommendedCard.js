import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHeart, FaLocationArrow } from "react-icons/fa";

const RecommendedCard = ({ show, recommendation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`shadow-xl w-full absolute px-4`}>
      <div className="rounded-xl bg-gray-700 relative h-[400px] ">
        <Image
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          src={recommendation.image}
          priority={true}
        />
      </div>
    </div>
  );
};

export default RecommendedCard;
