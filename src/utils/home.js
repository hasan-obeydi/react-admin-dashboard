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

export default generateSummaries;
