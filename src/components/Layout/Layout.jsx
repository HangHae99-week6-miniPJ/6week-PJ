import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../header/Nav";

function Layout({ children }) {
  //useLocation활용해서 계속되는 랜더링 방지
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" ? (
        children
      ) : (
        <>
          <Nav />
          {children}
        </>
      )}
    </>
  );
}

export default Layout;
