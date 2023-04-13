import Layout from "../layout/Layout";
import AddExpense from "../pages/AddExpense";

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
    ],
  },
]);
export default routes;
