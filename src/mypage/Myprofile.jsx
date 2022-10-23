import styled from "styled-components";
import MuButton from "../components/elem/MuButton";
import { Flexbox } from "../shared/Flexbox";
import { Outline } from "../shared/Outline";

const btnStyle1 = {
  _padding: "8px",
  _margin: "20px",
};

const btnStyle2 = {
  _padding: "8px",
  _margin: "20px",
  _border: "2px solid #1B76D2",
  _bgColor: "#ffffff",
  _color: "#1B76D2",
  _hoverBgColor: "#d5d5d5",
};

function Myprofile() {
  return (
    <ProfBox>
      <ProfTitle>
        <p>회원 정보 수정하기 🔐</p>
      </ProfTitle>
      <UserForm as="form">
        <ListBox>
          <BeforeBox>
            <img
              src="image/titleLogo.png"
              alt="프로필 사진"
              className="profimg"
            />
            <UserNickSt>닉네임</UserNickSt>
            <UserIdSt>@유저아이디</UserIdSt>
          </BeforeBox>
          <InputBox>
            <label>프로필 사진 변경</label>
            <input type="file" />
            <label>닉네임 변경</label>
            <input type="text" />
          </InputBox>
        </ListBox>
        <ButtonBox>
          <MuButton {...btnStyle1}>수정하기</MuButton>
          <MuButton {...btnStyle2} type="button">
            돌아가기
          </MuButton>
        </ButtonBox>
      </UserForm>
    </ProfBox>
  );
}

export default Myprofile;

/*프로필 박스*/
const ProfBox = styled.div`
  ${Outline};
`;
/*회원정보 수정 타이틀*/
const ProfTitle = styled.div`
  p {
    font-weight: bolder;
    font-size: 3rem;
    margin-left: 20px;
  }
`;
/*닉네임*/
const UserNickSt = styled.span`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-left: 10px;
`;

/*ID*/
const UserIdSt = styled.span`
  font-size: 1.5rem;
  margin-left: 5px;
  color: gray;
`;

/*기존 회원 정보 박스*/
const BeforeBox = styled.div`
  ${Flexbox};
`;

/*회원정보 수정박스*/
const InputBox = styled.div`
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/*수정 + 기존 정보 정렬*/
const ListBox = styled.div`
  display: flex;
  gap: 100px;
`;

/*회원정보 폼 박스*/
const UserForm = styled.div`
  ${Outline};
  ${Flexbox};
`;

/*버튼 박스*/
const ButtonBox = styled.div`
  display: flex;
  margin-top: 70px;
`;
