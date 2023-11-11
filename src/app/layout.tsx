import "../css/globals.css";
import { Poppins } from "next/font/google";
import Context from "../context/root.context";
import Providers from "@/context/query.provider";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rapid Eco ",
  description: "rapid growing ecommere ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Context> {children} </Context>
        </Providers>
      </body>
    </html>
  );
}
