import { useEffect } from "react";
import LoginPage from "../../pages/Auth/Login";

const AuthLauout = () => {
  const theme = JSON.parse(localStorage.getItem("theme"));
  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  return (
    <main id="root">
      <LoginPage />
    </main>
  );
};

export default AuthLauout;
