//CSS 임포트
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";

//기능 임포트
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUpModal = () => {
  //모달 열고 닫기 기능
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  //회원가입 데이터 값 받아오기
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  //비밀번호 추적
  const password = watch("password");

  //회원가입 데이터 전송
  const onSubmit = (data) => {
    axios
      .post("http://43.201.49.125/signup", data)
      .then((res) => {
        if (res.data.message === "SUCCESS") {
          alert("회원가입에 성공했습니다.");
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") {
          alert("중복된 아이디 또는 닉네임입니다. 중복 검사를 진행해주세요.");
        }
      });
  };

  //닉네임 중복검사 진행하기
  const nickDup = () => {
    const nickname = watch("nickname");
    axios.post("http://43.201.49.125/dup", { value: nickname }).then((res) => {
      if (res.data.result === true) {
        alert("중복된 닉네임 입니다.");
      } else {
        alert("사용 가능한 닉네임 입니다.");
      }
    });
  };

  //아이디 중복검사 진행하기
  const userDup = () => {
    const username = watch("username");
    axios.post("http://43.201.49.125/dup", { value: username }).then((res) => {
      if (res.data.result === true) {
        alert("중복된 아이디 입니다.");
      } else {
        alert("사용 가능한 아이디 입니다.");
      }
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        회원가입 하기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>회원가입하기</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Dup>
              <TextField
                autoFocus
                margin="dense"
                label="닉네임"
                type="text"
                fullWidth
                variant="standard"
                placeholder="8자 이내로 작성해주세요."
                required
                error={errors?.nickname}
                helperText={errors.nickname?.message}
                {...register("nickname", {
                  maxLength: {
                    value: 8,
                    message: "8글자 이내로 작성해주세요",
                  },
                })}
              />
              <StBtn onClick={nickDup}>닉네임 검사</StBtn>
            </Dup>
            <Dup>
              <TextField
                autoFocus
                margin="dense"
                label="아이디"
                type="text"
                fullWidth
                variant="standard"
                placeholder="2~10자로 영문을 포함하고 숫자, 특수문자는_만 사용해주세요."
                required
                error={errors?.username}
                helperText={errors.username?.message}
                {...register("username", {
                  maxLength: {
                    value: 10,
                    message: "10글자 이하로 작성해주세요",
                  },
                  minLength: {
                    value: 2,
                    message: "4글자 이상으로 작성해주세요",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{2,10}$/,
                    message: "형식에 맞지 않는 아이디 입니다.",
                  },
                })}
              />
              <StBtn onClick={userDup}>아이디 검사</StBtn>
            </Dup>
            <TextField
              autoFocus
              margin="dense"
              label="비밀번호"
              type="password"
              fullWidth
              variant="standard"
              placeholder="4~20 자리 영문을 포함하고 숫자, 특수문자(!@#$%^&*)만 사용해주세요."
              required
              error={errors?.password}
              helperText={errors.password?.message}
              {...register("password", {
                maxLength: {
                  value: 20,
                  message: "20자리 이하로 작성해주세요",
                },
                minLength: {
                  value: 4,
                  message: "4자리 이상으로 작성해주세요",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{4,20}$/,
                  message: "형식에 맞지 않는 비밀번호 입니다.",
                },
              })}
            />
            <TextField
              autoFocus
              margin="dense"
              label="비밀번호 재확인"
              type="password"
              fullWidth
              variant="standard"
              placeholder="비밀번호를 재입력해주세요."
              required
              error={errors?.confirm}
              helperText={errors.confirm?.message}
              {...register("confirm", {
                validate: {
                  confirmPw: (v) =>
                    v === password || "비밀번호가 일치하지 않습니다.",
                },
              })}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">가입하기</Button>
            <Button onClick={handleClose}>취소</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default SignUpModal;

/*입력값 + 중복검사 묶기 */
const Dup = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
`;
/*버튼 사이즈 조절 */
const StBtn = styled(Button)`
  width: 100px;
`;
