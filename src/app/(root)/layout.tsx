import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
async function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ClientLayout;
