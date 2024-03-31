import React, { ReactNode } from "react";
import "@/assets/styles/globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
interface IMainlayout {
  children: ReactNode;
}
const Mainlayout = ({ children }: IMainlayout) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default Mainlayout;
