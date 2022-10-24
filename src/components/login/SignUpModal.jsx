import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useState } from "react";

const SignUpModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        회원가입 하기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>회원가입하기</DialogTitle>
        <form>
          <DialogContent>
            <Dup>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="닉네임"
                type="input"
                fullWidth
                variant="standard"
                error
                helperText="형식에 맞지 않습니다."
              />
              <StBtn>아이디 검사</StBtn>
            </Dup>
            <Dup>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="아이디"
                type="input"
                fullWidth
                variant="standard"
                placeholder="4 ~ 20자의 영문, 숫자와 특수문자 '_'만 사용해주세요."
                error
                helperText="형식에 맞지 않습니다."
              />
              <StBtn>닉네임 검사</StBtn>
            </Dup>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="비밀번호"
              type="password"
              fullWidth
              variant="standard"
              placeholder="8~16자리 영문, 숫자, 특수문자 중 3가지 이상 조합으로
            만들어주세요."
              error
              helperText="형식에 맞지 않습니다."
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="비밀번호 재확인"
              type="password"
              fullWidth
              variant="standard"
              placeholder="비밀번호를 재입력해주세요."
              error
              helperText="비밀번호가 일치하지 않습니다."
            />
            <p>비밀번호 형식 검사 내용~</p>
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
