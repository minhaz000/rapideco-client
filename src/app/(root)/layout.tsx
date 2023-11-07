import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React, { useEffect } from "react";

async function ClientLayout({ children }: { children: React.ReactNode }) {
  // const data = await axios.get("api/v0/categories");
  // const data = await axios.get("http://localhost:3000/assets/site.settings.json");

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ClientLayout;
