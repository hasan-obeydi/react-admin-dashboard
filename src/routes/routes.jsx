import { createBrowserRouter } from "react-router";

import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/Home/Page";
import Products from "../pages/Products/Page";
import Users from "../pages/Users/Page";

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
]);

export default router;
