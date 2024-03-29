import React, { ReactNode } from "react";
import "@/assets/styles/globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
interface IMainlayout {
  children: ReactNode;
}
const Mainlayout = ({ children }: IMainlayout) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default Mainlayout;
