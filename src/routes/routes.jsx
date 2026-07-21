import { createBrowserRouter } from "react-router";

import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Users from "../pages/Users/Users";
import AuthLauout from "../components/layout/AuthLauout";
import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
    element: <AuthLauout />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
