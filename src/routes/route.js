import Layout from "../layout/Layout";
import AddExpense from "../pages/AddExpense";
import AllExpense from "../pages/AllExpense";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/Home");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addExpense",
        element: <AddExpense />,
      },
      {
        path: "allExpense",
        element: <AllExpense />,
      },
    ],
  },
]);
export default routes;
