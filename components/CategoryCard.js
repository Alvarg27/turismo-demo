import React from "react";
import FontAwesome from "./FontAwesome";

const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col mx-4">
      <FontAwesome
        name={category.icon}
        className="m-auto text-4xl text-indigo-700"
      />
      <p className="m-auto text-sm text-gray-500">{category.title}</p>
    </div>
  );
};

export default CategoryCard;
