import { Transition } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import experimental from "../public/experimental.webp";
import zenea from "../public/zenea.webp";
import patrio from "../public/patrio.webp";
import museo from "../public/museo.webp";

import RecommendedCard from "./RecommendedCard";
const recommendations = [
  {
    _id: "01",
    title: "Festival Experimental",
    image: experimental,
    color: "bg-blue-400",
    distance: "2.5",
  },
  {
    _id: "02",
    title: "Mes patrio",
    image: patrio,
    color: "bg-red-400",
    distance: "2.8",
  },
  {
    _id: "03",
    title: "Vista el muso MACQ",
    image: museo,
    color: "bg-red-400",
    distance: "4.2",
  },
  {
    _id: "04",
    title: "Conoce el Jardín Zenea",
    image: zenea,
    color: "bg-emerald-400",
    distance: "2.9",
  },
];
const Recommended = () => {
  const halfwayThrough = Math.floor(recommendations.length / 2);

  const arrayFirstHalf = recommendations.slice(0, halfwayThrough);
  const arraySecondHalf = recommendations.slice(
    halfwayThrough,
    recommendations.length
  );

  return (
    <div className="flex flex-col w-full ">
      <p className="font-medium px-4">Recomendado</p>
      <div className="flex">
        <div className="relative w-1/2">
          {arrayFirstHalf.map((r, i) => {
            const height = (i + 1) % 2 ? 250 : 350;
            return (
              <RecommendedCard key={r._id} recommendation={r} height={height} />
            );
          })}
        </div>
        <div className="relative w-1/2">
          {arraySecondHalf.map((r, i) => {
            const height = (i + 1) % 2 ? 350 : 250;
            return (
              <RecommendedCard key={r._id} recommendation={r} height={height} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
