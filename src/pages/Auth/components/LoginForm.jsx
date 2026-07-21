const LoginForm = ({
  handleSubmit,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
    <div className="max-w-120 w-[80%]">
      <h2 className="text-center text-3xl font-bold text-gray-700 dark:text-white">
        ورود به حساب کاربری
      </h2>
      <div className="bg-white dark:bg-dark-primary rounded-lg mt-10 p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="dark:text-white" htmlFor="username">
              نام کاربری :{" "}
            </label>
            <input
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-style placeholder:text-gray-400 dark:text-white"
              id="username"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="dark:text-white" htmlFor="password">
              رمز عبور :
            </label>
            <input
              placeholder="123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-style placeholder:text-gray-400 dark:text-white"
              id="password"
              type="text"
            />
          </div>
          <button className="mt-6 mx-auto block bg-gradiant px-3 py-2 text-white rounded-lg cursor-pointer hover:scale-95 duration-200">
            ورود به حساب
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
