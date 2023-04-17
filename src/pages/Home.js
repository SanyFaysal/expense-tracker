import React, { useState } from "react";
import { useGetExpensesQuery } from "../features/expense/expenseApi";
import TotalIncome from "../components/HomeComponent/TotalIncome";
import CurrentBallance from "../components/HomeComponent/CurrentBallance";
import TotalExpense from "../components/HomeComponent/TotalExpense";
import WeeklyExpense from "../components/HomeComponent/WeeklyExpense";
import LatestActivity from "../components/HomeComponent/LatestActivity";
import { MonthlyActivities } from "../components/MonthlyActivities/MonthlyActivities";
import { WeeklyActivities } from "../components/WeeklyActivities/WeeklyActivities";
import SelectedCategoryChart from "../components/SelectCategoryChart/SelectedCategoryChart";
import SelectCategory from "../components/SelectCategoryChart/SelectCategory";

export default function Home() {
  const totalIncome = 2000;
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
        <TotalIncome totalIncome={totalIncome} />
        <CurrentBallance
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />
        <TotalExpense totalIncome={totalIncome} totalExpense={totalExpense} />
        <WeeklyExpense
          totalIncome={totalIncome}
          weeklyExpense={weeklyExpense}
        />
      </div>
      <LatestActivity latestActivity={latestActivity} />
      <div className="flex justify-between gap-5 my-8">
        <WeeklyActivities weeklyActivities={weeklyActivities} />
        <MonthlyActivities monthlyActivities={monthlyActivities} />
      </div>
      <div className="my-16">
        <SelectCategory setSelect={setSelect} select={select} />
        {select.length ? (
          <SelectedCategoryChart
            monthlyActivities={monthlyActivities}
            select={select}
          />
        ) : (
          <p className="text-center text-xl">
            Please Select category to see history{" "}
          </p>
        )}
      </div>
    </div>
  );
}
