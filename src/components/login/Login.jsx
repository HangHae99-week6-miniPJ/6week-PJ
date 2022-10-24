import styled from "styled-components";
import SignUpModal from "./SignUpModal.jsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Outline } from "../../shared/Outline";
import { Flexbox } from "../../shared/Flexbox.jsx";

function Login() {
  return (
    <Stbox>
      <img alt="타이틀 로고" src="image/titleLogo.png" className="logo" />
      <StSingup>
        <StForm as="form">
          <StLogin>
            <TextField
              // id="outlined-basic"
              label="아이디"
              variant="outlined"
              type="text"
            />
            <TextField
              // id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
            />
          </StLogin>
          <Button variant="contained" type="submit">
            로그인
          </Button>
        </StForm>
        <SignUpModal />
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
  ${Flexbox}
`;

/*로그인박스*/
const StLogin = styled.div`
  ${Flexbox}
  gap: 10px;
`;

/*전체 로그인박스*/
const StSingup = styled.div`
  ${Outline};
  ${Flexbox}
  padding-bottom: 10px;
`;
