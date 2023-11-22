import React from "react";
import settingData from "../../../../public/assets/site.settings.json";
import CheckoutPage from "./CheckoutPage";
export const metadata = {
  title: `Checkout | ${settingData?.header?.meta_title}`,
};
const Checkout = () => {
  return <CheckoutPage />;
};

export default Checkout;
