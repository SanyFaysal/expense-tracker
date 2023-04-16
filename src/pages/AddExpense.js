import React from "react";
import { useCreateExpenseMutation } from "../features/expense/expenseApi";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function AddExpense() {
  const expenseCategory = [
    "Housing",
    "Transportation",
    "Food",
    "Clothing",
    "Medicine",
    "Education",
    "Insurance",
  ];
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-CA");

  const [createExpense, { data, isSuccess }] = useCreateExpenseMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    const category = event.target.category.value;
    const date = event.target.date.value;
    const subCategory = event.target.subCategory.value;
    createExpense({ amount, category, date, subCategory });
  };
  if (isSuccess) {
    toast.success(data?.message, { id: "createExpense" });
  }
  return (
    <div className="flex justify-center my-auto">
      <div className="my-4 w-2/4 h-50 ">
        <h1 className="text-3xl text-center  my-8">Add Your Daily Expense </h1>
        <form onSubmit={handleSubmit}>
          <div className=" flex gap-7">
            <div className="w-full">
              <label htmlFor="">Amount</label>
              <input
                required
                type="number"
                name="amount"
                placeholder="Enter expense amount"
                className="w-full bg-blue-50 px-3 py-2 rounded-lg text-lg"
              />
            </div>
            <div className="w-full">
              <label htmlFor="">Category</label>
              <select
                name="category"
                className="w-full text-lg bg-blue-50 px-3 py-2 rounded-lg"
              >
                <option value="" disabled selected>
                  Choose one{" "}
                </option>
                {expenseCategory.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-7 flex gap-7">
            <div className="w-full">
              <label htmlFor="">Expense Date</label>
              <input
                type="date"
                name="date"
                defaultValue={currentDate}
                className="w-full bg-blue-50 text-lg px-3 py-2 rounded-lg"
              />
            </div>
            <div className="w-full">
              <label htmlFor="">Sub Category (Optional)</label>
              <input
                name="subCategory"
                type="text"
                placeholder="Sub category of expense"
                className="w-full bg-blue-50 text-lg px-3 py-2 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-7">
            <input
              value="Add Expense"
              type="submit"
              className="w-full  bg-sky-200 font-medium text-lg text-sky-500 px-3 py-2  rounded-lg "
            />
          </div>
        </form>
        <Link to="/" className="text-blue-500 underline text-center mt-7 block">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
