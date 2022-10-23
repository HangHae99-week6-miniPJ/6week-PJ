import { useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { initializeConnect } from "react-redux/es/components/connect";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LabelBottomNavigation from "../components/header/LabelBottomNavigation";
import Nav from "../components/header/Nav";
import Layout from "../components/layout/Layout";
import { __addPosts } from "../redux/modules/postsSlice";

const AddBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    username: "",
    title: "",
    body: "",
  };

  const [addBoard, setAddBoard] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddBoard({ ...addBoard, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      addBoard.username === "" ||
      addBoard.title === "" ||
      addBoard.body === ""
    ) {
    }

    dispatch(__addPosts({ ...addBoard, id: Date.now() }));
    setAddBoard(initialState);

    navigate("/board-list");
  };

  return (
    <>
      <Layout>
        <Nav />

        <FormBox>
          <input
            type="text"
            name="username"
            value={addBoard.username}
            onChange={onChangeHandler}
            placeholder="작성자"
          />
          <input
            type="text"
            name="title"
            value={addBoard.title}
            onChange={onChangeHandler}
            placeholder="제목을 입력해 주세오"
          />
          <textarea
            name="body"
            id="inputbody"
            cols="20"
            rows="10"
            value={addBoard.body}
            onChange={onChangeHandler}
            placeholder="내용을 입력해 주세요."
          />
          <button onClick={onSubmitHandler}>추가하기</button>
        </FormBox>
      </Layout>
    </>
  );
};

export default AddBoard;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  input {
    font-size: 28px;
    height: 35px;
    padding-left: 5px;
    padding-bottom: 5px;
    border: none;
    border-bottom: 2px solid #aaa;
    border-right: 2px solid #aaa;
    margin-bottom: 35px;
  }
  textarea {
    height: 100px;
    font-size: 20px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #aaa;
    border-right: 2px solid #aaa;
  }
  button {
    background-color: #aaa;
    min-width: 30px;
    min-height: 30px;
    width: 13%;
    height: 10%;
    border-radius: 5px;
    border: none;
    margin: 10px auto;
    &:hover {
      background-color: #aaa;
    }
    cursor: pointer;
  }
`;
