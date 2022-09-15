import { Transition } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();

  const next = () => {
    ref.current.scrollTo({
      left: scrollPosition + ref.current.clientWidth,
      behavior: "smooth",
    });
    setScrollPosition(scrollPosition + ref.current.clientWidth);
  };

  const prev = () => {
    ref.current.scrollTo({
      left: scrollPosition - ref.current.clientWidth,
      behavior: "smooth",
    });
    setScrollPosition(scrollPosition - ref.current.clientWidth);
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
        ref={ref}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        className="relative h-[400px] flex overflow-x-hidden my-4"
      >
        {recommendations.map((r, i) => (
          <RecommendedCard recommendation={r} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
