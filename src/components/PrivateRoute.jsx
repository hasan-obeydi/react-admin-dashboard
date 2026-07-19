import { useEffect } from "react";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate, children]);
  return children;
};

export default PrivateRoute;
