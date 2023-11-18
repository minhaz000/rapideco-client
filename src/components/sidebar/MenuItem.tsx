import { RxDashboard } from "react-icons/rx";
import { BsTruck } from "react-icons/bs";
import { MdStars, MdAttribution, MdPages } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineDollarCircle,
} from "react-icons/ai";
const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <AiOutlineHome />,
  },
  {
    title: "Products",
    icon: <AiOutlineShoppingCart />,
    children: [
      {
        title: "all products",
        path: "/admin/all-products",
      },
      {
        title: "Add Product",
        path: "/admin/add-product",
      },
    ],
  },
  {
    title: "Orders",
    icon: <BsTruck />,
    children: [
      {
        title: "All Orders",
        path: "/admin/all-order",
      },
    ],
  },
  {
    title: "Categories",
    icon: <RxDashboard />,
    children: [
      {
        title: "all categories",
        path: "/admin/all-categories",
      },
      {
        title: "Add category",
        path: "/admin/add-category",
      },
      {
        title: "Edit category",
        path: "/admin/edit-category",
      },
    ],
  },
  {
    title: "Attributes",
    icon: <MdAttribution />,
    children: [
      {
        title: "All Attributes",
        path: "/admin/all-attributes",
      },
    ],
  },
  {
    title: "Payment Method",
    path: "/admin/payments",
    icon: <AiOutlineDollarCircle />,
  },
  {
    title: "Brand",
    path: "/admin/brand",
    icon: <MdStars />,
  },
  {
    title: "Pages",
    icon: <MdPages />,
    children: [
      {
        title: "Home Page",
        path: "/admin/home-page",
      },
    ],
  },
];

export default menuItems;
