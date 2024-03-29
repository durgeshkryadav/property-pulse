import React, { ReactNode } from "react";
import "@/assets/styles/globals.scss"
import Navbar from "@/components/navbar";
interface IMainlayout {
  children: ReactNode;
}
const Mainlayout = ({ children }: IMainlayout) => {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Mainlayout;
