import { Link } from "react-router";

const LastUserCard = ({ username, email }) => {
  return (
    <Link
      to="/users"
      className="flex items-center gap-4 border border-color p-4 rounded-lg dark:border-gray-700 transition-transform duration-300 hover:scale-103 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)]"
    >
      <div className="w-24 rounded-full overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src="images/default-avatar.webp"
        />
      </div>
      <div>
        <p className="font-bold text-lg">
          کاربر <span className="text-blue-500">{username}</span> ثبت نام کرد
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">{email}</p>
      </div>
    </Link>
  );
};

export default LastUserCard;
