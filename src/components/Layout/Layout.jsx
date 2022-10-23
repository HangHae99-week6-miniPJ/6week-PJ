import React from "react";
import styled from "styled-components";
import { Outline } from "../../shared/Outline";

function Layout({ children }) {
  return <StLayout>{children}</StLayout>;
}

export default Layout;

const StLayout = styled.div`
  ${Outline}
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;
