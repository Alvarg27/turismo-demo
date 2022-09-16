import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    _id: "01",
    title: "Experiencias",
    icon: "FaStar",
  },
  {
    _id: "02",
    title: "Cultura",
    icon: "FaPaintBrush",
  },
  {
    _id: "03",
    title: "Hoteles",
    icon: "FaHotel",
  },
  {
    _id: "04",
    title: "Restaurantes",
    icon: "FaUtensils",
  },
  {
    _id: "05",
    title: "Naturaleza",
    icon: "FaMountain",
  },
  {
    _id: "06",
    title: "Viñedos",
    icon: "FaGlassCheers",
  },
];

const Categories = () => {
  return (
    <div className="my-8">
      <p className="font-medium px-4 ">Por categoría</p>
      <div className="flex flex-col  overflow-scroll no-scrollbar">
        <div className="flex mx-auto my-4">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
