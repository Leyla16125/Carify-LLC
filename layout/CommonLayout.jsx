import React from "react";
import { Outlet } from "react-router-dom";
import CommonHeader from "../src/components/CommonHeader";
import Footer from "../src/components/Footer";

const CommonLayout = () => {
  return (
    <>
      <CommonHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout; 
