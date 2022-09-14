import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen overflow-x-hidden bg-gray-800">
      {children}
    </div>
  );
};

export default Layout;
