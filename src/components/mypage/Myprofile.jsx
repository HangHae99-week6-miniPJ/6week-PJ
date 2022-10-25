import styled from "styled-components";
import MuButton from "../elem/MuButton";

import { Flexbox } from "../../shared/Flexbox";
import { Outline } from "../../shared/Outline";

const btnStyle1 = {
  _padding: "8px",
  _margin: "20px",
};

const btnStyle2 = {
  _padding: "8px",
  _margin: "20px",
  _border: "2px solid #19A8F1",
  _bgColor: "#ffffff",
  _color: "#19A8F1",
  _hoverBgColor: "#d5d5d5",
};

function Myprofile() {
  return (
    <>
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
            <p>프로필 사진 변경</p>
            <input type="file" />
            <p>닉네임 변경</p>
            <input
              type="text"
              placeholder=" 변경할 닉네임을 작성해주세요. (1-10자이내)"
              minLength="1"
              maxLength="10"
            />
          </InputBox>
        </ListBox>
        <ButtonBox>
          <MuButton {...btnStyle1}>수정하기</MuButton>
          <MuButton {...btnStyle2}>돌아가기</MuButton>
        </ButtonBox>
      </UserForm>
    </>
  );
}

export default Myprofile;

/*닉네임*/
const UserNickSt = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
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
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    ${Outline};
    font-size: 16px;
  }

  p {
    margin-left: 15px;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

/*수정 + 기존 정보 정렬*/
const ListBox = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 50px;
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
