import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { __deletePosts, __getPosts } from "../redux/modules/postsSlice";

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = (e) => {
    dispatch(__deletePosts(post.id));
  };

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <div>{post.username}</div>
      <button
        onClick={() => {
          navigate(`/detail/${post.id}`);
        }}
      >
        수정하러갑니다.
      </button>
      <button onClick={onDeleteHandler}>삭제하기</button>
    </div>
  );
};

export default Card;
