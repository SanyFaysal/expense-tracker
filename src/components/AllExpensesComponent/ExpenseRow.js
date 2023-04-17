import moment from "moment";
import React from "react";

export default function ExpenseRow({ expense }) {
  return (
    <div key={expense._id} className="flex justify-center  ">
      <div className="grid grid-cols-5 gap-5 bg-slate-50 px-5 py-3 w-full">
        <span>{moment.utc(expense.date).format("MMM Do, YYYY")}</span>
        <span>{expense.category}</span>
        <span className="col-span-2 normal-case"> {expense.subCategory}</span>
        <span> {expense.amount} $</span>
      </div>
    </div>
  );
}
