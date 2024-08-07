import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import { loader } from "../utilities/loader";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader : loader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Route;
