import { Bar } from "react-chartjs-2";

export function WeeklyActivities({ weeklyActivities: expenses }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Last one week history of expense ",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Day of Week",
        },
        stacked: true,
      },
      y: {
        title: {
          display: true,
          text: "Total Expenses",
        },
        stacked: true,
      },
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
  };

  const groupedExpenses = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
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
        data: labels.map((dayOfWeek) => ({
          x: dayOfWeek,
          y: groupedExpenses[dayOfWeek] ? groupedExpenses[dayOfWeek].total : 0,
          date: groupedExpenses[dayOfWeek]
            ? groupedExpenses[dayOfWeek].date
            : "",
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
      <p className="mt-5 text-2xl mb-3 ">Weekly Expense History</p>
      <Bar
        options={options}
        data={data}
        className=" border-info border-2 rounded  p-4  "
      />
    </div>
  );
}
