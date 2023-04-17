import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Last one month history of expense ",
    },
  },
};

export function MonthlyActivities({ monthlyActivities: expenses }) {
  const groupedExpenses = expenses.reduce((acc, expense) => {
    const dayOfWeek = expense.category;
    if (!acc[dayOfWeek]) {
      acc[dayOfWeek] = {
        expenses: [],
        total: 0,
      };
    }
    acc[dayOfWeek].expenses.push(expense);
    acc[dayOfWeek].total += Number(expense.amount);
    return acc;
  }, {});
  const labels = Object.keys(groupedExpenses);
  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: labels.map((category) => ({
          x: category,
          y: groupedExpenses[category] ? groupedExpenses[category].total : 0,
          date: groupedExpenses[category] ? groupedExpenses[category].date : "",
        })),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "50%", height: "50%" }}>
      <p className="mt-5 text-2xl mb-3 ">
        Last <span className="text-info">One Month</span> Expense History
      </p>
      <Bar
        options={options}
        data={data}
        className=" border-info border-2 rounded  p-4  "
      />
    </div>
  );
}
