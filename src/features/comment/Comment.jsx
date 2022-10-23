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

  const [check, setCheck] = useState(comment.content);

  const onCommentEdit = (e) => {
    e.preventDefault();
    if (editComment.content === "") {
      Swal.fire({
        icon: "error",
        title: "잘못된거같은데요",
        text: "모두 입력해주세요!😥",
      });
    }
    if (editComment.content.trim() === "") return;
    console.log({ ...comment, ...editComment });
    dispatch(__editComments({ ...comment, ...editComment }));

    setIsEdit(false);
    setCheck(editComment.content);
  };

  const onCommentDelete = (e) => {
    dispatch(__deleteComments(comment.id));
  };

  return (
    <CommentBox>
      {/* isEdit이 true상태일때 = comment 내용을 보여준다. 닉네임도추가가능함. */}
      {!isEdit ? (
        <div>
          <p>{check}</p>
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
  .btnIcon {
    font-size: 20px;
  }
`;

const FormBox = styled.form`
  display: flex;
  align-items: center;

  input {
    max-width: 354px;
    width: 255px;
    height: 23px;
    font-size: 15px;
    padding-bottom: 2px;
    border: none;
    border-bottom: 1px solid #fdc676;
    border-right: 1px solid #fdc676;
  }
  #inpBox {
    margin-left: 25px;
    width: 54px;
    @media (max-width: 480px) {
      width: 30px;
    }
  }
`;
