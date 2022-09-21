import React from "react";
import NearbyCard from "./NearbyCard";
import mariposa from "../public/mariposa.webp";
import leyendas from "../public/leyendas.webp";
import urraca from "../public/urraca.webp";

const nearby = [
  {
    _id: "01",
    title: "La Mariposa",
    distance: 0.4,
    image: mariposa,
    address: "Angela Peralta #7, Centro",
    icon: "FaUtensils",
    color: "#fb923c",
    background: "#ffedd5",
  },
  {
    _id: "02",
    title: "Noche de Leyenda",
    distance: 2.6,
    image: leyendas,
    address: "And. 5 de Mayo 39, Centro",
    icon: "FaStar",
    color: "#60a5fa",
    background: "#e0f2fe",
  },
  {
    _id: "03",
    title: "Doña Urraca",
    distance: 3,
    image: urraca,
    address: "C. 5 de Mayo 117, La Santa Cruz, La Cruz",
    icon: "FaHotel",
    color: "#818cf8",
    background: "#e0e7ff",
  },
];

const Nearby = () => {
  return (
    <div className="my-8">
      <p className=" px-4 text-2xl">Cerca de tí</p>
      <div className="flex flex-col  overflow-scroll no-scrollbar">
        <div className="flex mx-auto my-4">
          {nearby.map((n) => (
            <NearbyCard key={n._id} item={n} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nearby;
