import "../css/globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/context/query.provider";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className + "bg-white"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
