import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";

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
    <div className="flex flex-col ">
      <p className="font-medium">Recomendado</p>
      <div
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        className="relative h-[550px] max-w-full"
      >
        <Transition
          show={isShowing === 1}
          enter="transition-all duration-500"
          enterFrom={`opacity-0 ${
            swipe === "right" ? "" : "-"
          }translate-x-full`}
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-500"
          leaveFrom="opacity-100"
          leaveTo={`opacity-0 ${swipe === "right" ? "-" : ""}translate-x-full`}
        >
          <RecommendedCard show={isShowing === 1} />
        </Transition>

        <Transition
          show={isShowing === 2}
          enter="transition-all duration-500"
          enterFrom={`opacity-0 ${
            swipe === "right" ? "" : "-"
          }translate-x-full`}
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-500"
          leaveFrom="opacity-100"
          leaveTo={`opacity-0 ${swipe === "right" ? "-" : ""}translate-x-full`}
        >
          <RecommendedCard show={isShowing === 2} />
        </Transition>
        <Transition
          show={isShowing === 3}
          enter="transition-all duration-500"
          enterFrom={`opacity-0 ${
            swipe === "right" ? "" : "-"
          }translate-x-full`}
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-500"
          leaveFrom="opacity-100"
          leaveTo={`opacity-0 ${swipe === "right" ? "-" : ""}translate-x-full`}
        >
          <RecommendedCard show={isShowing === 3} />
        </Transition>
      </div>
      <div className="flex my-4 mx-auto">
        <span
          className={`bg-indigo-700 h-2 w-2 rounded-full mx-4 transition duration-300 ${
            isShowing === 1 ? "bg-indigo-700" : "bg-gray-300"
          }`}
        />
        <span
          className={`bg-indigo-700 h-2 w-2 rounded-full mx-4 transition duration-300 ${
            isShowing === 2 ? "bg-indigo-700" : "bg-gray-300"
          }`}
        />
        <span
          className={`bg-indigo-700 h-2 w-2 rounded-full mx-4 transition duration-300 ${
            isShowing === 3 ? "bg-indigo-700" : "bg-gray-300"
          }`}
        />
      </div>
    </div>
  );
};

export default Recommended;
