import "../css/globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/context/query.provider";
import "react-loading-skeleton/dist/skeleton.css";
import settingData from "../../public/assets/site.settings.json";
import { Metadata } from "next";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: settingData?.header?.meta_title,
  description: settingData?.header?.meta_description,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={settingData?.header?.favicon?.img_url}
          sizes="any"
          type="text/image"
        />
      </head>
      <body className={poppins.className + "bg-white"} data-theme="light">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
