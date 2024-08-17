import React from "react";
import Header from "./components/Layout/Header";
const Layout = ({ children }) => {
  return (
    <div>
      <p>basic layout</p>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
