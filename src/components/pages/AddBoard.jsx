import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addPosts } from "../../redux/modules/postsSlice";

//css
import styled from "styled-components";
import { Outline } from "../../shared/Outline";
import StLayout from "../layout/StLayout";

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
    )
      return {};

    dispatch(__addPosts({ ...addBoard, id: Date.now() }));
    setAddBoard(initialState);

    navigate("/board-list");
  };

  return (
    <StLayout>
      <List>
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
      </List>
    </StLayout>
  );
};

export default AddBoard;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 250px;

  input {
    font-size: 15px;
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
    font-size: 15px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #aaa;
    border-right: 2px solid #aaa;
  }
  button {
    background-color: #aaa;
    min-width: 30px;
    min-height: 30px;
    width: 40%;
    height: 20%;
    border-radius: 5px;
    margin: 10px auto;

    cursor: pointer;
  }
`;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 17px;
`;
