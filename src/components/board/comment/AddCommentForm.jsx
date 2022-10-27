import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { __addComments } from "../../../redux/modules/commentListSlice";

const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const initialState = {
    content: "",
    id: 0,
    postId: +id,
  };

  const [comment, setComment] = useState(initialState);

  const onSubmitComment = (e) => {
    e.preventDefault();
    if (comment.content === "") {
      Swal.fire({
        icon: "error",
        title: "비었습니다만?",
        text: "입력해주세오!😥",
      });
    }
    if (comment.content.trim() === "") return;

    dispatch(__addComments({ ...comment, id: Date.now() }));
    setComment(initialState);
  };

  return (
    <CommentInputBox>
      <input
        maxLength="30"
        type="text"
        value={comment.content}
        placeholder="댓글입력좀ㅎ"
        onChange={(e) => {
          setComment({
            ...comment,
            content: e.target.value,
          });
        }}
      />
      <button onClick={onSubmitComment}>추가하기</button>
    </CommentInputBox>
  );
};

export default AddCommentForm;

const CommentInputBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  input {
    width: 70%;
    height: 30px;

    border: 2px solid #40424454;
    border-radius: 10px;
    font-size: 16px;
    padding-bottom: 5px;
  }
  button {
    background-color: aquamarine;
    min-width: 40px;
    min-height: 40px;
    width: 18%;
    height: 5%;
    border-radius: 8px;

    &:hover {
      background-color: #aaa;
    }
    cursor: pointer;
  }
`;
