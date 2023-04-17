import React from "react";
import { useGetExpensesQuery } from "../features/expense/expenseApi";

import ExpenseRow from "../components/AllExpensesComponent/ExpenseRow";

export default function AllExpense() {
  const { data } = useGetExpensesQuery();
  return (
    <div className="mb-10">
      <p className="text-3xl text-center my-5">All of your Expenses</p>
      <div className="grid gap-2 w-3/4 mx-auto ">
        <div className="grid grid-cols-5 gap-5 bg-sky-50 py-3 rounded-t px-5 w-full">
          <span className="font-semibold">Date </span>
          <span className="font-semibold">Category</span>
          <span className="col-span-2 normal-case font-semibold">
            {" "}
            Sub Category
          </span>
          <span className="font-semibold">Amount</span>
        </div>
        {data?.data?.map((expense) => (
          <ExpenseRow expense={expense} />
        ))}
      </div>
    </div>
  );
}
