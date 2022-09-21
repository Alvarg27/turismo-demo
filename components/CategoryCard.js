import React from "react";
import FontAwesome from "./FontAwesome";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col  w-[100px] ">
      <div
        className="w-[60px] h-[60px] flex rounded-lg mx-auto"
        style={{ background: category.background }}
      >
        <FontAwesome
          style={{ color: category.color }}
          name={category.icon}
          className="m-auto text-3xl"
        />
      </div>
      <p className="m-auto text-sm text-gray-500 mt-2">{category.title}</p>
    </div>
  );
};

export default CategoryCard;
