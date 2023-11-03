import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import axios from "@/hooks/hook.axios";
import React, { useEffect } from "react";

async function ClientLayout({ children }: { children: React.ReactNode }) {
  // const data = await axios.get("api/v0/categories");
  const data = await axios.get("http://localhost:3000/assets/site.settings.json");

  return (
    <>
      <Header data={data} />
      {children}
      <Footer data={data} />
    </>
  );
}

export default ClientLayout;
