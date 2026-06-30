import { createBrowserRouter } from "react-router";

import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Users from "../pages/Users/Users";
import LoginPage from "../pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
