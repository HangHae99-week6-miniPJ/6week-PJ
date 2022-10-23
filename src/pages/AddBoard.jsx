import { useState } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { initializeConnect } from "react-redux/es/components/connect";
import { useNavigate } from "react-router-dom";
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

        <form>
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
        </form>
      </Layout>
    </>
  );
};

export default AddBoard;
