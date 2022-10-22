import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;

const StLayout = styled.div`
  border: 2px solid #ececec;
  border-radius: 10px;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  padding: 10px;
`;
