import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";
import experimental from "../public/experimental.webp";
import zenea from "../public/zenea.webp";
import patrio from "../public/patrio.webp";

const recommendations = [
  {
    _id: "01",
    title: "Festival Experimntal",
    image: experimental,
  },
  {
    _id: "02",
    title: "Mes patrio",
    image: patrio,
  },
  {
    _id: "03",
    title: "Conoce el Jardín Zenea",
    image: zenea,
  },
];

const Recommended = () => {
  const [isShowing, setIsShowing] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const [swipe, setSwipe] = useState();

  const next = () => {
    if (isShowing < 3) {
      setIsShowing((prev) => prev + 1);
    }
    if (isShowing >= 3) {
      setIsShowing(1);
    }
    setSwipe("right");
  };

  const prev = () => {
    if (isShowing > 1) {
      setIsShowing((prev) => prev - 1);
    }
    if (isShowing <= 1) {
      setIsShowing(3);
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
    <div className="flex flex-col w-full">
      <p className="font-medium text-white">Recomendado</p>
      <div
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        className="relative h-[420px] w-full"
      >
        {recommendations.map((r, i) => (
          <Transition
            key={r._id}
            show={isShowing === i + 1}
            enter="transition-all duration-500"
            enterFrom={`opacity-0 ${
              swipe === "right" ? "" : "-"
            }translate-x-full`}
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-500"
            leaveFrom="opacity-100"
            leaveTo={`opacity-0 ${
              swipe === "right" ? "-" : ""
            }translate-x-full`}
          >
            <RecommendedCard show={isShowing === i + 1} recommendation={r} />
          </Transition>
        ))}
      </div>
      <div className="flex my-4 mx-auto">
        <span
          onClick={() => setIsShowing(1)}
          className={`bg-indigo-700 h-2 w-2 rounded-full mx-4 transition duration-300 ${
            isShowing === 1 ? "bg-indigo-700" : "bg-gray-300"
          }`}
        />
        <span
          onClick={() => setIsShowing(2)}
          className={`bg-indigo-700 h-2 w-2 rounded-full mx-4 transition duration-300 ${
            isShowing === 2 ? "bg-indigo-700" : "bg-gray-300"
          }`}
        />
        <span
          onClick={() => setIsShowing(3)}
          className={`bg-indigo-700 h-2 w-2 rounded-full mx-4 transition duration-300 ${
            isShowing === 3 ? "bg-indigo-700" : "bg-gray-300"
          }`}
        />
      </div>
    </div>
  );
};

export default Recommended;
