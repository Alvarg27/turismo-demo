import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    _id: "01",
    title: "Experiencias",
    icon: "FaStar",
    color: "#60a5fa",
    background: "#e0f2fe",
  },
  {
    _id: "02",
    title: "Cultura",
    icon: "FaPaintBrush",
    color: "#fbbf24",
    background: "#fef3c7",
  },
  {
    _id: "03",
    title: "Hoteles",
    icon: "FaHotel",
    color: "#818cf8",
    background: "#e0e7ff",
  },
  {
    _id: "04",
    title: "Restaurantes",
    icon: "FaHtensils",
    color: "#fb923c",
    background: "#ffedd5",
  },
  {
    _id: "05",
    title: "Naturaleza",
    icon: "FaMountain",
    color: "#2dd4bf",
    background: "#ccfbf1",
  },
  {
    _id: "06",
    title: "Vinos",
    icon: "FaGlassCheers",
    color: "#fb7185",
    background: "#ffe4e6",
  },
];

const Categories = () => {
  return (
    <div className="my-8 border-b-[1px] border-gray-100">
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
