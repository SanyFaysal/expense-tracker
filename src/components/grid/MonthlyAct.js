import React from "react";
import { Line } from "react-chartjs-2";
import { LineElement, PointElement, Chart } from "chart.js";

Chart.register(LineElement, PointElement);

export default function MonthlyAct({ monthlyActivities: expenses, select }) {
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

  const data = {
    labels: select,
    datasets: [
      {
        label: "Expenses",
        data: select.map((category) => ({
          x: category,
          y: groupedExpenses[category] ? groupedExpenses[category].total : 0,
          date: groupedExpenses[category] ? groupedExpenses[category].date : "",
        })),
        fill: false,
        borderColor: "skyblue",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Last one month history of expense in selected Category",
      },
    },
  };

  return (
    <div style={{ width: "60%", height: "50%", margin: "auto" }}>
      <Line
        data={data}
        options={options}
        className=" border-info border-2 rounded  p-4  "
      />
    </div>
  );
}
