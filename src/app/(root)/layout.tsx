import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React, { useEffect } from "react";

async function ClientLayout({ children }: { children: React.ReactNode }) {
  // const data = await axios.get("api/v0/categories");
  // const data = await axios.get("http://localhost:3000/assets/site.settings.json");
<<<<<<< HEAD

=======
  const data = "d";
>>>>>>> 89552644346379f88e1dba58d868b4f32c81ba70
  // const data = await axios.get("http://localhost:3000/assets/site.settings.json");
  const data = "d";
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ClientLayout;
