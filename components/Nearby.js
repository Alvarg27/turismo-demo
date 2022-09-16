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
  },
  {
    _id: "02",
    title: "Noche de Leyenda",
    distance: 2.6,
    image: leyendas,
    address: "And. 5 de Mayo 39, Centro",
    icon: "FaStar",
  },
  {
    _id: "03",
    title: "Doña Urraca",
    distance: 3,
    image: urraca,
    address: "C. 5 de Mayo 117, La Santa Cruz, La Cruz",
    icon: "FaHotel",
  },
];

const Nearby = () => {
  return (
    <div className="my-8">
      <p className="font-medium px-4 ">Cerca de tí</p>
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
