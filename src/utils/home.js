import { HiUsers } from "react-icons/hi2";
import { FaTicketAlt, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

const generateSummaries = ({
  productsLength,
  usersLength,
  ordersLength,
  ticketLength,
}) => {
  return [
    {
      id: 1,
      title: "تعداد محصولات",
      value: productsLength,
      Icon: FaShoppingBag,
      color: "#FEC53D",
      link: "/products",
    },
    {
      id: 2,
      title: "تعداد کاربران",
      value: usersLength,
      Icon: HiUsers,
      color: "#8280FF",
      link: "/users",
    },
    {
      id: 3,
      title: "تعداد سفارشات",
      value: ordersLength,
      Icon: FaShoppingCart,
      color: "#FF9066",
    },
    {
      id: 4,
      title: "تعداد تیکت‌ها",
      value: ticketLength,
      Icon: FaTicketAlt,
      color: "#4AD991",
    },
  ];
};

const generateDataChart = () => {
  return [
    { id: 1, name: "فروردین", value: 1000 },
    { id: 2, name: "اردیبهشت", value: 2000 },
    { id: 3, name: "خرداد", value: 5000 },
    { id: 4, name: "تیر", value: 2000 },
    { id: 5, name: "مرداد", value: 3000 },
    { id: 6, name: "شهریور", value: 6000 },
    { id: 7, name: "مهر", value: 7000 },
    { id: 8, name: "آبان", value: 6000 },
    { id: 9, name: "آذر", value: 9000 },
    { id: 10, name: "دی", value: 10000 },
    { id: 11, name: "بهمن", value: 8000 },
    { id: 12, name: "اسفند", value: 5000 },
  ];
};

export { generateSummaries, generateDataChart };
