import React from "react";
import CartPage from "./CartPage";
import settingData from "../../../../public/assets/site.settings.json";
export const metadata = {
  title: `Cart | ${settingData?.header?.meta_title}`,
};
const Cart = () => {
  return <CartPage />;
};

export default Cart;
