import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LibraryAddSharpIcon from "@mui/icons-material/LibraryAddSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TestDiv>
        <Button size="medium" variant="outlined" startIcon={<LogoutIcon />}>
          로그아웃
        </Button>
      </TestDiv>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="갓생 게시판"
          value="recents"
          onClick={() => {
            navigate("/board-list");
          }}
          icon={<LibraryBooksSharpIcon />}
        />

        <BottomNavigationAction
          label="갓생 작성하기"
          value="favorites"
          onClick={() => {
            navigate("/add-board");
          }}
          icon={<LibraryAddSharpIcon />}
        />
        <BottomNavigationAction
          label="내 정보 수정하기"
          value="nearby"
          icon={<AccountBoxSharpIcon />}
          onClick={() => {
            navigate("/mypage");
          }}
        />
      </BottomNavigation>
    </>
  );
}

/*로그아웃 박스 */
const TestDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
