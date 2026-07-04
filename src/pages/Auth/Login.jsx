import { Link } from "react-router";
import useTitle from "../../hooks/useTitle";

const LoginPage = () => {
  useTitle('ورود به حساب کاربری')
  return <Link to="/">Back</Link>;
};

export default LoginPage;
