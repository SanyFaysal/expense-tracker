import React from "react";
import TotalIncome from "../components/TotalIncome";
import CurrentBallance from "../components/CurrentBallance";
import WeeklyExpense from "../components/WeeklyExpense";
import { useGetExpensesQuery } from "../features/expense/expenseApi";
import TotalExpense from "../components/TotalExpense";

export default function Home() {
  const { data } = useGetExpensesQuery();
  const totalExpense = data?.totalExpense;
  console.log(totalExpense);
  return (
    <div className="   lg:px-16 px-6">
      <p className="text-3xl my-5 text-center">Welcome To Expense Tracker</p>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <TotalIncome />
        <TotalExpense totalExpense={totalExpense} />
        <CurrentBallance totalExpense={totalExpense} />
        <WeeklyExpense />
      </div>
      <div className="grid grid-cols-5 gap-5">
        {data?.data.map((expense) => (
          <p className="my-2 px-3 py-2 bg-green-100 text-green-500 ">
            {expense.category} - {expense.amount} $
          </p>
        ))}
      </div>
    </div>
  );
}
