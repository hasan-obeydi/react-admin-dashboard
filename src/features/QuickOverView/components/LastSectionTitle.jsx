import { Link } from "react-router";

const LastSectionTitle = ({ title, link }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <Link
        to={link}
        className="bg-linear-to-r from-sky-500 to-indigo-500 text-white p-2 rounded-lg"
      >
        مشاهده همه
      </Link>
    </div>
  );
};

export default LastSectionTitle;
