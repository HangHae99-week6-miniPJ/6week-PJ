import styled from "styled-components";
import SignUpModal from "./SignUpModal.jsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Outline } from "../../shared/Outline";
import { Flexbox } from "../../shared/Flexbox.jsx";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const signin = (data) => {
    // axios.defaults.withCredentials = true;
    axios
      .post("http://43.201.49.125/signin", data)
      .then((res) => {
        console.log(res);
        const accessToken = res.data.accessToken.split(" ")[1];
        const refreshToken = res.data.refreshToken.split(" ")[1];
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        if (res.data.message === "로그인되었습니다.") {
          navigate("/board-list");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") {
          Swal.fire({
            icon: "error",
            title: "다시 확인해주세요!",
            text: "아이디 또는 비밀번호가 틀렸습니다.",
          });
        }
      });
  };

  return (
    <Stbox>
      <img alt="타이틀 로고" src="image/titleLogo.png" className="logo" />
      <StSingup>
        <StForm as="form">
          <StLogin>
            <TextField
              label="아이디"
              variant="outlined"
              type="text"
              {...register("username")}
            />
            <TextField
              // id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
              {...register("password")}
            />
          </StLogin>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit(signin)}
          >
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
