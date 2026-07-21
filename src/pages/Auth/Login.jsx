import { useEffect, useState } from "react";

import useTitle from "../../hooks/useTitle";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  useTitle("ورود به حساب کاربری");

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      console.log("asd");
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 4 || password.length < 6) {
      toast.error(
        "نام کاربری حداقل 4 کاراکتر و رمزعبور حداقل باید 8 کاراکتر باشد. ",
      );
    } else {
      username === "admin" && Number(password) === 123456
        ? (toast.success("ورود با موفقیت انجام شد."),
          setTimeout(() => {
            navigate("/");
            localStorage.setItem("token", JSON.stringify("fake-jwt-token"));
          }, 500),
          setUsername(""),
          setPassword(""))
        : toast.error("نام کاربری و رمز عبور اشتباه است.");
    }
  };

  return (
    <div className="dark:bg-dark-body h-screen overflow-x-hidden bg-body flex-center">
      <LoginForm
        handleSubmit={handleSubmit}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <Toaster toastOptions={{ duration: 500 }} />
    </div>
  );
};

export default LoginPage;
