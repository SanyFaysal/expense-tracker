import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
