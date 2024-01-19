import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Context from "@/context/root.context";
import settingData from "../../../public/assets/site.settings.json";
export const metadata = {
  title: settingData?.header?.meta_title,
  description: settingData?.header?.meta_description,
};
async function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Context>
      <Header />
      {children}
      {/* <Footer /> */}
    </Context>
  );
}

export default ClientLayout;
