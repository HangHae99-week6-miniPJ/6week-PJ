import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  __deleteComments,
  __editComments,
} from "../../redux/modules/commentListSlice";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const [editComment, setEditComment] = useState({
    content: comment.content,
  });
  //새로고침 필요없이 component 랜더링 시키기 위한 State with useEffect.
  const [renderComment, setRenderComment] = useState(comment.content);

  const onCommentEdit = (e) => {
    e.preventDefault();
    if (editComment.content === "") {
      Swal.fire({
        icon: "error",
        title: "잘못된거같은데요🤭",
        text: "모두 입력해주세요! 😤",
      });
    }
    if (editComment.content.trim() === "") return;
    console.log({ ...comment, ...editComment });
    dispatch(__editComments({ ...comment, ...editComment }));

    setIsEdit(false);
    setRenderComment(editComment.content);
  };

  const onCommentDelete = (e) => {
    dispatch(__deleteComments(comment.id));
  };
  console.log(isEdit);
  return (
    <CommentBox>
      {/* isEdit이 true상태일때 = comment 내용을 보여준다. 닉네임도추가가능함. */}
      {!isEdit ? (
        <div style={{ width: "350px" }}>
          <p>{renderComment}</p>
        </div>
      ) : (
        <FormBox>
          <input
            type="text"
            value={editComment.content}
            onChange={(e) => {
              setEditComment({ ...editComment, content: e.target.value });
            }}
          />
          <button onClick={onCommentEdit}>수정하기</button>
        </FormBox>
      )}
      <button onClick={() => setIsEdit((prev) => !prev)}>
        {isEdit ? "취소" : "수정"}
      </button>
      {!isEdit ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            Swal.fire({
              title: "삭제할까요?",
              text: "댓글을 삭제하시겠습니까?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d5",
              cancelButtonColor: "#d33",
              confirmButtonText: "Delete",
            }).then((result) => {
              if (result.isConfirmed) {
                onCommentDelete();
                Swal.fire("삭제완료!", "이 댓글은 지워졌습니다.", "success");
              }
            });
          }}
        >
          삭제하기
        </button>
      ) : null}
    </CommentBox>
  );
};

export default Comment;

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  margin-bottom: 10px;

  button {
    background-color: #aaa;
    min-width: 30px;
    min-height: 25px;
    width: 5%;
    height: 5%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    justify-content: flex-end;
  }
`;

const FormBox = styled.form`
  display: flex;
  align-items: center;

  input {
    max-width: 354px;
    min-width: 150px;
    width: 550px;
    height: 23px;
    font-size: 15px;
    padding-bottom: 2px;
    border: none;
    border-bottom: 1px solid #bccb;
    border-right: 1px solid #bccb;
    margin: 10px;
  }

  button {
    background-color: #aaa;
    min-width: 30px;
    min-height: 25px;
    width: 25%;
    height: 5%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    justify-content: flex-end;
  }
`;
