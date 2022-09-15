import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import experimental from "../public/experimental.webp";
import zenea from "../public/zenea.webp";
import patrio from "../public/patrio.webp";

import RecommendedCard from "./RecommendedCard";
const recommendations = [
  {
    _id: "01",
    title: "Festival Experimntal",
    image: experimental,
    color: "bg-blue-400",
  },
  {
    _id: "02",
    title: "Mes patrio",
    image: patrio,
    color: "bg-red-400",
  },
  {
    _id: "03",
    title: "Conoce el Jardín Zenea",
    image: zenea,
    color: "bg-emerald-400",
  },
];

const Recommended = () => {
  const [slide, setSlide] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const [swipe, setSwipe] = useState();

  const next = () => {
    if (slide < 3) {
      setSlide((prev) => prev + 1);
    }
    if (slide >= 3) {
      setSlide(1);
    }
    setSwipe("right");
  };

  const prev = () => {
    if (slide > 1) {
      setSlide((prev) => prev - 1);
    }
    if (slide <= 1) {
      setSlide(3);
    }
    setSwipe("left");
  };
  // ...
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="flex flex-col w-full ">
      <p className="font-medium text-white">Recomendado</p>
      <div
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        className="relative w-full h-[400px] overflow-x-hidden  my-4"
      >
        {recommendations.map((r, i) => (
          <Transition
            show={slide === i + 1}
            key={r._id}
            enter="transition-all duration-1000 ease-in-out	"
            enterFrom={`opacity-100 ${
              swipe === "right" ? "" : "-"
            }translate-x-full`}
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-1000 ease-in-out	"
            leaveFrom="opacity-100  translate-x-0"
            leaveTo={`opacity-100 ${
              swipe === "right" ? "-" : ""
            }translate-x-full`}
          >
            <RecommendedCard recommendation={r} />
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
