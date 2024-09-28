import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SinglePage from "./views/SinglePage.jsx";
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import AddBlog from "./views/AddBlog.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/blog/:id",
    element: <SinglePage />,
  },
  {
    path: "/addblog",
    element: <AddBlog />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
