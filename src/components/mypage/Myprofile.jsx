//CSS관련 임포트
import styled from "styled-components";
import MuButton from "../elem/MuButton";
import { Flexbox } from "../../shared/Flexbox";
import { Outline } from "../../shared/Outline";
import Swal from "sweetalert2";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { set, useForm } from "react-hook-form";

const btnStyle = {
  _padding: "8px",
  _margin: "20px",
};

function Myprofile() {
  const [user, setUser] = useState([]);
  const [userimg, setUserimg] = useState([]);

  //데이터 전송
  const { register, handleSubmit, watch } = useForm();

  //유저 데이터 가져오기
  useEffect(() => {
    const req1 = axios.get("http://43.201.49.125/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        refreshToken: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
    });
    const req2 = axios.get("http://43.201.49.125/user/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        refreshToken: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
    });
    Promise.all([req1, req2])
      .then((res) => {
        setUser(res[0].data.data);
        setUserimg(res[1].data.data);
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          alert("데이터 가져오기에 실패했습니다.");
        }
      });
  }, []);

  //프로팔 사진 수정하기
  const [content, setContent] = useState("");
  const onChange = (e) => {
    setContent(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profImg", content);

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      refreshToken: `Bearer ${localStorage.getItem("refreshToken")}`,
    };
    axios
      .patch("http://43.201.49.125/profile/image", formData, { headers })
      .then((res) => {
        if (res.data.message === "SUCCESS") {
          window.location.replace("/mypage");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") {
          Swal.fire("프로필 사진 수정에 실패했습니다.");
        }
      });
  };

  //닉네임 변경하기
  const onNickEdit = () => {
    const nickname = watch("nickname");
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      refreshToken: `Bearer ${localStorage.getItem("refreshToken")}`,
    };
    axios
      .patch(
        "http://43.201.49.125/profile/nickname",
        { nickname: nickname },
        { headers }
      )
      .then((res) => {
        if (res.data.message === "SUCCESS") {
          window.location.replace("/mypage");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_BAD_REQUEST") {
          Swal.fire("이미 사용중인 닉네임 입니다.");
        }
      });
  };

  return (
    <>
      <User>
        <ListBox>
          <BeforeBox>
            <img
              src={`data:image/webp;base64,${userimg}`}
              alt="프로필 사진"
              className="profimg"
            />
            <UserNickSt>{user.nickname}</UserNickSt>
            <UserIdSt>@{user.username}</UserIdSt>
          </BeforeBox>
          <InputBox>
            <p>프로필 사진 변경</p>
            <Form as="form" onSubmit={onSubmit} enctype="multipart/form-data">
              <input
                type="file"
                {...register("imageUrl")}
                required
                accept="image/*"
                onChange={onChange}
              />
              <MuButton {...btnStyle}>사진 변경</MuButton>
            </Form>
            <p>닉네임 변경</p>
            <Form as="form" onSubmit={handleSubmit(onNickEdit)}>
              <input
                type="text"
                placeholder="변경할 닉네임을 작성해주세요. (1-8자이내)"
                minLength="1"
                maxLength="8"
                required
                {...register("nickname")}
              />
              <MuButton {...btnStyle}>닉네임 변경</MuButton>
            </Form>
          </InputBox>
        </ListBox>
      </User>
    </>
  );
}

export default Myprofile;

/*닉네임*/
const UserNickSt = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 20px;
`;

/*ID*/
const UserIdSt = styled.span`
  font-size: 1.5rem;
  color: gray;
  margin-top: 5px;
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
    width: 300px;
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
  margin: 50px 50px;
  flex-direction: column;
`;

/*회원정보 폼 박스*/
const User = styled.div`
  ${Outline};
  ${Flexbox};
`;

const Form = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
