import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Porjects from "./Pages/Proyects/Proyects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "projects",
        element: <Porjects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
