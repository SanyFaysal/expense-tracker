// import React, { useState } from "react";

const SelectCategory = ({ setSelect, select }) => {
  const categories = [
    "Food",
    "Clothing",
    "Education",
    "Housing",
    "Medicine",
    "Insurance",
  ];

  const handleSelect = (value) => {
    if (!select.includes(value)) {
      setSelect([...select, value]);
    }
    if (select.includes(value)) {
      setSelect([...select.filter((sel) => sel !== value)]);
    }
  };

  return (
    <div className="mb-16">
      <p className="text-2xl">Select category for history</p>
      <div className="grid grid-cols-6 gap-4 mt-5 ">
        {categories.map((category) => (
          <button
            onClick={() => handleSelect(category)}
            className={` px-3 py-2 rounded ${
              select.includes(category) ? "bg-sky-200" : "bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
