import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
  const [isShowing, setIsShowing] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setIsShowing(2);
      setTimeout(() => {
        setIsShowing(3);
      }, 3000);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col">
      <p className="font-medium">Recomendado</p>
      <div className="mt-4 relative h-[500px] overflow-hidden">
        <Transition
          show={isShowing === 1}
          enter="transition-all duration-500"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-500"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-full"
        >
          <RecommendedCard show={isShowing === 1} />
        </Transition>
        <Transition
          show={isShowing === 2}
          enter="transition-all duration-500"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <RecommendedCard show={isShowing === 2} />
        </Transition>
        <Transition
          show={isShowing === 3}
          enter="transition-all duration-500"
          enterFrom="opacity-0 translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
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
