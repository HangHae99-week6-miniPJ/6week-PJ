import styled from "styled-components";
import FormDialog from "./FormDialog.jsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Login() {
  return (
    <Stbox>
      <img alt="타이틀 로고" src="image/titleLogo.png" className="logo" />
      <StSingup>
        <StForm as="form">
          <StLogin>
            <TextField
              id="outlined-basic"
              label="아이디"
              variant="outlined"
              type="text"
            />
            <TextField
              id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
            />
          </StLogin>
          <Button variant="contained">로그인</Button>
        </StForm>
        <FormDialog />
      </StSingup>
    </Stbox>
  );
}

export default Login;

/*스타일 폼태그*/
const StForm = styled.form`
  padding: 20px;
  display: flex;
  gap: 10px;
  width: 400px;
  justify-content: center;
`;

/*전체 박스*/
const Stbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/*로그인박스*/
const StLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/*전체 로그인박스*/
const StSingup = styled.div`
  border: 2px solid #ececec;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  border-radius: 10px;
`;
