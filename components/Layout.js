import React from "react";
import Banner from "./Banner";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen overflow-x-hidden bg-gray-800 relative">
      <Banner />
      {children}
    </div>
  );
};

export default Layout;
