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
    comment: "",
  };

  const [comment, setComment] = useState(initialState);

  const onSubmitComment = (e) => {
    e.preventDefault();
    if (comment.comment === "") {
      Swal.fire({
        icon: "error",
        title: "비었습니다만?",
        text: "입력해주세오!😥",
      });
    }
    if (comment.comment.trim() === "") return;

    dispatch(__addComments({ ...comment }));
    setComment(initialState);
  };

  return (
    <CommentInputBox>
      <input
        maxLength="30"
        type="text"
        value={comment.comment}
        placeholder="댓글입력좀ㅎ"
        onChange={(e) => {
          setComment({
            ...comment,
            comment: e.target.value,
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
    border: none;
    border-bottom: 2px solid #aaa;
    font-size: 16px;
    padding-bottom: 5px;
  }
  button {
    background-color: #aaa;
    min-width: 30px;
    min-height: 25px;
    width: 23%;
    height: 5%;
    border-radius: 5px;
    border: none;
    &:hover {
      background-color: #aaa;
    }
    cursor: pointer;
  }
`;
