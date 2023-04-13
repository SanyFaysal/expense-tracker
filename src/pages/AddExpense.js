import React from "react";

export default function AddExpense() {
  const expenseCategory = [
    "Housing",
    "Transportation",
    "Food",
    "Clothing",
    "Medical/Healthcare",
    "Education",
    "Insurance",
  ];
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-CA");
  return (
    <div className="flex justify-center my-auto">
      <div className="my-4 w-2/5 h-50 ">
        <h1 className="text-3xl text-center  my-8">Add Your Daily Expense </h1>
        <div className=" flex gap-4">
          <div className="w-full">
            <label htmlFor="">Amount</label>
            <input
              required
              type="number"
              placeholder="Enter expense amount"
              className="w-full bg-blue-50 px-3 py-2 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Category</label>
            <select className="w-full bg-blue-50 px-3 py-2 rounded-lg">
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
        <div className="mt-5 flex gap-4">
          <div className="w-full">
            <label htmlFor="">Expense Date</label>
            <input
              type="date"
              defaultValue={currentDate}
              className="w-full bg-blue-50 px-3 py-2 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Sub Category (Optional)</label>
            <input
              type="text"
              placeholder="Sub category of expense"
              className="w-full bg-blue-50 px-3 py-2 rounded-lg"
            />
          </div>
        </div>
        <div>
          <button className="w-full bg-sky-200 font-medium text-lg text-sky-500 px-3 py-2 mt-5 rounded-lg ">
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}
