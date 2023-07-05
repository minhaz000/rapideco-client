import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
