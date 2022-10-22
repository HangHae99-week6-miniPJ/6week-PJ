import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

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
        <DialogContent>
          <DialogContentText>양식에 맞게 기입해주세요.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="닉네임"
            type="text"
            fullWidth
            variant="standard"
            placeholder="8글자 이하로 작성해주세요."
          />
          <Button>닉네임 검사</Button>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="아이디"
            type="text"
            fullWidth
            variant="standard"
            placeholder="4 ~ 20자의 영문, 숫자와 특수문자 '_'만 사용해주세요."
          />
          <Button>아이디 검사</Button>
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="비밀번호 재확인"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>가입하기</Button>
          <Button onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
