import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const theme = JSON.parse(localStorage.getItem("theme"));
  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);
  const navigate = useNavigate();
  return (
    <div className="dark:bg-dark-body h-screen overflow-x-hidden bg-body flex-center">
      <div className="w-[80%] max-w-150 dark:text-white">
        <div className="text-9xl text-center">404</div>
        <p className="text-3xl text-center">صفحه مورد نظر شما پیدا نشد :(</p>

        <div className="flex items-center gap-3 justify-center mt-15">
          <button
            className="border px-3 py-2 dark:text-white rounded-lg cursor-pointer hover:scale-95 duration-200"
            onClick={() =>
              navigate("/", {
                replace: true,
              })
            }
          >
            صفحه اصلی
          </button>
          <button
            className="bg-gradiant px-3 py-2 text-white rounded-lg cursor-pointer hover:scale-95 duration-200"
            onClick={() =>
              navigate(-1, {
                replace: true,
              })
            }
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
