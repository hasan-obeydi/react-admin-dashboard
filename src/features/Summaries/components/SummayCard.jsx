import { Link } from "react-router";

const SummayCard = ({ title, value, Icon, color, link }) => {
  const bgColors = {
    "#FEC53D": "bg-[#FEC53D]",
    "#8280FF": "bg-[#8280FF]",
    "#FF9066": "bg-[#FF9066]",
    "#4AD991": "bg-[#4AD991]",
  };
  return (
    <Link
      to={link}
      className="bg-white dark:bg-dark-primary rounded-lg p-6 flex items-center justify-between hover:shadow-sm transition-transform duration-300 hover:scale-105"
    >
      <div>
        <p className="text-[#202224] dark:text-white text-sm">{title}</p>
        <p className="text-4xl font-bold mt-4">{value}</p>
      </div>
      <div className={`${bgColors[color]} p-4 rounded-xl `}>
        <Icon className="text-2xl text-white" />
      </div>
    </Link>
  );
};

export default SummayCard;
