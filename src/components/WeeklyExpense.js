import React from "react";

export default function WeeklyExpense({ weeklyExpense = 0 }) {
  return (
    <div className="flex bg-red-50   my-6 px-5 rounded-lg   text-red-500 font-semibold">
      <div className="my-5 ">
        <h1 className="text-2xl  mb-2">Weekly Expense </h1>
        <p className="text-2xl ">{weeklyExpense}$</p>
      </div>
    </div>
  );
}
