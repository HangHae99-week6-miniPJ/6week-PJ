import React from "react";
import { useNavigate } from "react-router-dom";
import LabelBottomNavigation from "../components/header/LabelBottomNavigation";
import Nav from "../components/header/Nav";

function BoardList() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <LabelBottomNavigation />
        <Nav />
      </div>
      {/* <button
        onClick={() => {
          navigate("/add-board");
        }}
      >
        작성하기
      </button> */}
      {/* detailBoard가 cardlist역할을 한다. */}
      <div>카테고리</div>
      <div>
        {/* Card를 보여준다.. <Card/> */}
        작성리스트
      </div>
    </>
  );
}

export default BoardList;
