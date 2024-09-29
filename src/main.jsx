import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import SinglePage from "./views/SinglePage.jsx";
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import AddBlog from "./views/AddBlog.jsx";
import EditBlog from "./views/EditBlog.jsx";

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
  {
    path: "/edit/:id",
    element: <EditBlog />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
