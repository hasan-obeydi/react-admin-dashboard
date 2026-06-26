import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";

const menus = [
  {
    id: crypto.randomUUID(),
    title: "منو اصلی",
    items: [
      {
        id: crypto.randomUUID(),
        title: "داشبورد",
        href: "/",
        icon: HiOutlineHome,
      },
      {
        id: crypto.randomUUID(),
        title: "محصولات",
        href: "/products",
        icon: HiOutlineShoppingCart,
      },
      {
        id: crypto.randomUUID(),
        title: "کاربران",
        href: "/users",
        icon: HiOutlineUsers,
      },
    ],
  },
];

export default menus;
