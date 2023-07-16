import "../css/globals.css";
import { Inter } from "next/font/google";
import Context from "../context/root.context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid Eco ",
  description: "rapid growing ecomere ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context> {children} </Context>
      </body>
    </html>
  );
}
