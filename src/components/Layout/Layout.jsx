import React from "react";
import { useLocation } from "react-router-dom";

//css import

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

// const StLayout = styled.div`
//   ${Outline}
//   max-width: 1200px;
//   min-width: 800px;
//   margin: auto;
// `;
