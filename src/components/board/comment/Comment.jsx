import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  __deleteComments,
  __editComments,
} from "../../../redux/modules/commentListSlice";

const Comment = ({ comments }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const [editComment, setEditComment] = useState({
    comment: comments.comment,
  });
  //새로고침 필요없이 component 랜더링 시키기 위한 State with useEffect.
  const [renderComment, setRenderComment] = useState(comments.comment);

  const onCommentEdit = (e) => {
    e.preventDefault();
    if (editComment.comment === "") {
      Swal.fire({
        icon: "error",
        title: "잘못된거같은데요🤭",
        text: "모두 입력해주세요! 😤",
      });
    }
    if (editComment.comment.trim() === "") return;
    console.log({ ...comments, ...editComment });
    dispatch(__editComments({ ...comments, ...editComment }));

    setIsEdit(false);
    setRenderComment(editComment.comment);
  };

  const onCommentDelete = (e) => {
    dispatch(__deleteComments(comments.commentId));
  };

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
            value={editComment.comment}
            onChange={(e) => {
              setEditComment({ ...editComment, comment: e.target.value });
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
            e.stopPropagation(); //이벤트전파방지
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
  width: 60%;
  gap: 15px;

  border: 2px solid #40424454;
  border-radius: 10px;
  font-size: 16px;

  button {
    background-color: aquamarine;
    border-radius: 8px;
    font-size: 13px;
    min-width: 80px;
    min-height: 25px;
    justify-content: flex-end;
  }
`;

const FormBox = styled.form`
  display: flex;
  align-items: center;

  input {
    border: 2px solid #40424454;
    border-radius: 10px;
    font-size: 16px;

    min-width: 80px;
    min-height: 25px;

    font-size: 16px;
    padding-bottom: 5px;
  }

  button {
    background-color: aquamarine;
    min-width: 80px;
    min-height: 25px;

    height: 5%;
    border-radius: 8px;
    cursor: pointer;
  }
`;
