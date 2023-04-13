import React from "react";
import TotalIncome from "../components/TotalIncome";
import CurrentBallance from "../components/CurrentBallance";
import WeeklyExpense from "../components/WeeklyExpense";

export default function Home() {
  return (
    <div className=" ">
      <p className="text-3xl my-5 text-center">Welcome To Expense Tracker</p>
      <div className="grid grid-cols-3 gap-5  lg:px-16 px-6 mt-5">
        <TotalIncome />
        <CurrentBallance />
        <WeeklyExpense />
      </div>
    </div>
  );
}
