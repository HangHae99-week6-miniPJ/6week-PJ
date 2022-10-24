import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Outline } from "../../shared/Outline";
import Myprofile from "./Myprofile";
import Mypick from "./Mypick";

function Mymenu() {
  const [menu, setMenu] = useState(true);
  const [title, setTitle] = useState("회원정보 수정하기🔐");

  return (
    <>
      <MymenuBar>
        <Button
          variant="text"
          size="large"
          startIcon={<AutoFixHighIcon />}
          onClick={() => {
            setMenu(true);
            setTitle("회원정보 수정하기🔐");
          }}
        >
          회원정보 수정하기
        </Button>
        <Button
          variant="text"
          size="large"
          startIcon={<FavoriteIcon />}
          onClick={() => {
            setMenu(false);
            setTitle("좋아요 목록 확인하기📌");
          }}
        >
          좋아요 목록 확인하기
        </Button>
      </MymenuBar>
      <Contain>
        <ConTitle>
          <p>{title}</p>
        </ConTitle>
        {menu ? <Myprofile /> : <Mypick />}
      </Contain>
    </>
  );
}

export default Mymenu;

/*마이 페이지 메뉴바 */
const MymenuBar = styled.div`
  ${Outline}
  display: flex;
  justify-content: space-around;
`;

/*컨테이너 박스*/
const Contain = styled.div`
  ${Outline};
`;

/*컨테이너 타이틀*/
const ConTitle = styled.div`
  margin: 20px 0px 30px 0px;
  p {
    font-weight: bolder;
    font-size: 2rem;
    margin-left: 20px;
  }
`;
