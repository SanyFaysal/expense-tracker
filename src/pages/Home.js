import React from "react";
import moment from "moment";

import TotalIncome from "../components/TotalIncome";
import CurrentBallance from "../components/CurrentBallance";
import WeeklyExpense from "../components/WeeklyExpense";
import { useGetExpensesQuery } from "../features/expense/expenseApi";
import TotalExpense from "../components/TotalExpense";
import LatestActivity from "../components/LatestActivity";

export default function Home() {
  const { data } = useGetExpensesQuery();
  const totalExpense = data?.totalExpense;
  const weeklyExpense = data?.weeklyExpense;
  const latestActivity = data?.latestActivity || [];
  console.log(latestActivity);

  return (
    <div className="   lg:px-16 px-6">
      <p className="text-3xl my-5 text-center">Welcome To Expense Tracker</p>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <TotalIncome />
        <CurrentBallance totalExpense={totalExpense} />
        <TotalExpense totalExpense={totalExpense} />
        <WeeklyExpense weeklyExpense={weeklyExpense} />
      </div>
      <LatestActivity latestActivity={latestActivity} />
    </div>
  );
}
