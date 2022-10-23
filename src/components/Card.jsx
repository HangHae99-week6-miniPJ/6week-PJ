import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { __deletePosts, __getPosts } from "../redux/modules/postsSlice";
import Swal from "sweetalert2";

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
      <button
        onClick={(e) => {
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
              onDeleteHandler();
              Swal.fire("삭제 완료!", "게시글이 삭제 되었어요!", "success");
            }
          });
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Card;
