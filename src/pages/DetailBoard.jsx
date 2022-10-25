import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __deletePosts,
  __editPosts,
  __getPosts,
} from "../redux/modules/postsSlice";

import styled from "styled-components";
import Swal from "sweetalert2";
import AddCommentForm from "../features/comment/AddCommentForm";
import CommentList from "../features/comment/CommentList";
import { List } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import { __toggleLike } from "../redux/modules/likeSlice";

const DetailBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const like = useSelector((state) => state.likes);
  console.log(like);
  //edit기본값 false로 해놓음.
  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();

  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === +id);

  // useEffect(() => {
  //   dispatch(__getPosts);
  // });

  // const onisLike = async () => {
  //   dispatch(__toggleLike(likeNumber));
  // };

  const [editPost, setEditPost] = useState({
    title: post?.title,
    body: post?.body,
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
    <>
      <List>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
          <FavoriteIcon sx={{ color: red[400] }} />
        </IconButton>
        <p>좋아요 숫자</p>
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
              value={editPost.body}
              onChange={(e) => {
                setEditPost({ ...editPost, body: e.target.value });
              }}
            />
            <button onClick={onEditHandler}>저장해주새오</button>
          </FormBox>
        ) : (
          <FormBox>
            <input value={editPost.title} disabled />
            <textarea value={editPost.body} disabled />
          </FormBox>
        )}

        <AddCommentForm />
        <CommentList />
      </List>
    </>
  );
};

export default DetailBoard;

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

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
