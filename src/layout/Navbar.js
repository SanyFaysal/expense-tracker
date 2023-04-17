import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-sky-950 text-white lg:px-16 px-6 py-5">
      <div className="navbar-start">
        <Link to="/" className="text-xl">
          Expense Tracker
        </Link>
      </div>

      <div className="navbar-end">
        <Link
          to="/allExpense"
          className=" text-info px-2 py-1 mr-5 rounded-lg  hover:text-white duration-300"
        >
          All Expense
        </Link>
        <Link
          to="/addExpense"
          className="border border-info text-info px-2 py-1 rounded-lg hover:border-white hover:text-white duration-300"
        >
          Add Expense
        </Link>
      </div>
    </div>
  );
}
