import React, { useState } from "react";

import TotalIncome from "../components/TotalIncome";
import CurrentBallance from "../components/CurrentBallance";
import WeeklyExpense from "../components/WeeklyExpense";
import { useGetExpensesQuery } from "../features/expense/expenseApi";
import TotalExpense from "../components/TotalExpense";
import LatestActivity from "../components/LatestActivity";
import { MonthlyActivities } from "../components/chart/MonthlyActivities";
import { WeeklyActivities } from "../components/chart/WeeklyActivities";
import Grid from "../components/grid/Grid";
import MonthlyAct from "../components/grid/MonthlyAct";

export default function Home() {
  const [select, setSelect] = useState([]);
  const { data } = useGetExpensesQuery();
  const totalExpense = data?.totalExpense;
  const weeklyExpense = data?.weeklyExpense;
  const latestActivity = data?.latestActivity || [];
  const monthlyActivities = data?.monthlyActivities || [];
  const weeklyActivities = data?.weeklyActivities || [];
  console.log(select);
  return (
    <div className="  lg:px-16 px-6">
      <p className="text-3xl my-5 text-center">Welcome To Expense Tracker</p>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <TotalIncome />
        <CurrentBallance totalExpense={totalExpense} />
        <TotalExpense totalExpense={totalExpense} />
        <WeeklyExpense weeklyExpense={weeklyExpense} />
      </div>
      <LatestActivity latestActivity={latestActivity} />
      <div className="flex justify-between gap-5 my-8">
        <WeeklyActivities weeklyActivities={weeklyActivities} />
        <MonthlyActivities monthlyActivities={monthlyActivities} />
      </div>
      <div className="my-16">
        <Grid setSelect={setSelect} select={select} />
        {select.length ? (
          <MonthlyAct monthlyActivities={monthlyActivities} select={select} />
        ) : (
          <p className="text-center text-xl">
            Please Select category to see history{" "}
          </p>
        )}
      </div>
    </div>
  );
}
