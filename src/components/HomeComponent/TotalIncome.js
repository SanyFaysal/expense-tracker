import React from "react";

const TotalIncome = ({ totalIncome }) => {
  return (
    <div className="flex bg-green-50   my-6 px-5 rounded-lg  text-green-500 font-semibold">
      <div className="my-5 ">
        <h1 className="text-2xl  mb-2">Total Balance </h1>
        <p className="text-2xl ">{totalIncome}$</p>
        <div className=" flex gap-4"></div>
      </div>
    </div>
  );
};

export default TotalIncome;
