import React from "react";

export default function CurrentBallance({ totalExpense = 0, totalIncome }) {
  return (
    <div className="flex bg-sky-50   my-6 px-5 rounded-lg text-sky-500 font-semibold">
      <div className="my-5 ">
        <h1 className="text-2xl  mb-2">Current Balance </h1>
        <p className="text-2xl ">{totalIncome - totalExpense}$</p>
        <div className=" flex gap-4"></div>
      </div>
    </div>
  );
}
