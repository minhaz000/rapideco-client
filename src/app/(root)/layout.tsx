import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import settingData from "../../../public/assets/site.settings.json";
export const metadata = {
  title: settingData?.header?.meta_title,
  description: settingData?.header?.meta_description,
};
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
