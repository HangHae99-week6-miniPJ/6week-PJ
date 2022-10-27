import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __deletePosts,
  __editPosts,
  __getPosts,
} from "../../redux/modules/postsSlice";
import styled from "styled-components";
import Swal from "sweetalert2";
import AddCommentForm from "../board/comment/AddCommentForm";
import CommentList from "../board/comment/CommentList";
import { List } from "@mui/material";
import StLayout from "../Layout/StLayout";
import CheckToken from "../Layout/CheckToken";

const DetailBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //edit기본값 false로 해놓음.
  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();
  console.log(id);

  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.postId === +id);

  console.log("postId", post.postId);

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  const [editPost, setEditPost] = useState({
    title: post?.title,
    contents: post?.contents,
  });

  const onEditHandler = (e) => {
    e.preventDefault();

    dispatch(__editPosts({ ...post, ...editPost }));
    setIsEdit(false);
  };

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    Swal.fire({
      title: "삭제할까요?",
      text: "게시글을 삭제 하겠시겠어요?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(__deletePosts(post.id));
        Swal.fire("삭제 완료!", "게시글이 삭제 되었어요!", "success");
        setTimeout(() => {
          navigate("/board-list");
        }, 1300);
      }
    });
  };

  return (
    <StLayout>
      <CheckToken>
        <List>
          <BtnBox>
            <button onClick={() => setIsEdit((prev) => !prev)}>
              {isEdit ? "취소" : "수정"}
            </button>
            {/* deletehandler로 삭제구현. */}
            <button onClick={onDeleteHandler}>삭제하기</button>
          </BtnBox>
          {isEdit ? (
            <FormBox>
              <input
                type="text"
                value={editPost.title}
                onChange={(e) => {
                  setEditPost({ ...editPost, title: e.target.value });
                }}
              />
              <textarea
                type="text"
                value={editPost.contents}
                onChange={(e) => {
                  setEditPost({ ...editPost, contents: e.target.value });
                }}
              />
              <button onClick={onEditHandler}>저장해주새오</button>
            </FormBox>
          ) : (
            <FormBox>
              <input value={editPost.title} disabled />
              <textarea value={editPost.contents} disabled />
            </FormBox>
          )}

          <AddCommentForm />
          <CommentList />
        </List>
      </CheckToken>
    </StLayout>
  );
};

export default DetailBoard;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  input {
    width: 70%;
    height: 40px;
    border: 2px solid #40424454;
    border-radius: 10px;
    font-size: 1rem;
    padding: 5px 10px;
    margin: auto;
  }
  textarea {
    width: 70%;
    height: 150px;
    border: 2px solid #40424454;
    padding: 12px;
    font-size: 1rem;
    border-radius: 10px;
    resize: none;
    margin: 10px auto;
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: #aaa;
    min-width: 50px;
    min-height: 50px;

    border-radius: 15px;
    border: none;
    margin: 10px auto;
    &:hover {
      background-color: #aaa;
    }
    cursor: pointer;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  button {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    background-color: aquamarine;
  }
`;
