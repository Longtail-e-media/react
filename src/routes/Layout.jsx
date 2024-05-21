import React from "react";
import Headerhome from "../components/Headerhome";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {location.pathname === "/home" ? <Headerhome /> : <Header />}

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
