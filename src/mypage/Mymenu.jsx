import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Outline } from "../shared/Outline";

function Mymenu() {
  return (
    <MymenuBar>
      <Button variant="text" size="large" startIcon={<AutoFixHighIcon />}>
        마이 프로필 수정하기
      </Button>
      <Button variant="text" size="large" startIcon={<FavoriteIcon />}>
        나의 찜 목록 확인하기
      </Button>
    </MymenuBar>
  );
}

export default Mymenu;

/*마이 페이지 메뉴바 */
const MymenuBar = styled.div`
  ${Outline}
  display: flex;
  justify-content: space-around;
`;
