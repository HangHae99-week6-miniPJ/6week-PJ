import React from "react";
import styled from "styled-components";

function Mymenu({ children }) {
  return <MymenuBar> Mymenu {children} </MymenuBar>;
}

export default Mymenu;

/*마이 페이지 메뉴바 */
const MymenuBar = styled.div`
  border: 2px solid #ececec;
  border-radius: 10px;
`;
