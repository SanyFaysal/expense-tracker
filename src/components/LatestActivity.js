import moment from "moment/moment";
import React from "react";

export default function LatestActivity({ latestActivity }) {
  return (
    <>
      <p className="mt-4 text-2xl">Activity of the last two days</p>
      <div className="grid grid-cols-4 gap-5">
        {latestActivity.map((expense) => (
          <div
            key={expense._id}
            className="my-2 px-3 justify-between items-center py-2 flex border-2 border-indigo-300 text-indigo-500 rounded-lg"
          >
            <div>
              <p>
                Expense Dated
                <br />
                <span className="font-semibold">
                  {" "}
                  {moment.utc(expense.date).format("MMM Do, YYYY")}
                </span>
              </p>
              <p className=" ">
                Expense Category
                <br />
                <span className=" font-semibold">{expense.category} </span>
              </p>
            </div>
            <span className="font-semibold text-3xl">{expense.amount} $</span>
          </div>
        ))}
      </div>
    </>
  );
}
