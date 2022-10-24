import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __deletePosts, __editPosts } from "../redux/modules/postsSlice";

import Nav from "../components/header/Nav";
import styled from "styled-components";
import Swal from "sweetalert2";
import Layout from "../components/layout/Layout";
import AddCommentForm from "../features/comment/AddCommentForm";
import CommentList from "../features/comment/CommentList";

const DetailBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //edit기본값 false로 해놓음.
  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();

  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === +id);

  //게시글 수정하기.
  //id관련은 payload로 붙이는게 아직 좀이해가안됨
  //post가 data있을시에 보여준다. ?.
  const [editPost, setEditPost] = useState({
    title: post?.title,
    body: post?.body,
  });

  const onEditHandler = (e) => {
    e.preventDefault();
    //이부분은 받아온값이 이미 있고, disabled처리를 하기 때문에 사용하지는 않아서 주석으로돌려놓음.
    // if (editPost.title === "" || editPost.body === "") {
    //   Swal.fire({
    //     icon: "error",
    //     title: "비어있다!!",
    //     text: "입력하세요!😤",
    //   });
    // }
    // if (editPost.title.trim() === "" || editPost.body.trim() === "") return;
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
      <Layout>
        <BtnBox>
          <button onClick={() => setIsEdit((prev) => !prev)}>
            {isEdit ? "취소" : "수정"}
          </button>
          {/* deletehandler로 삭제구현. */}
          <button onClick={onDeleteHandler}>삭제하기</button>
        </BtnBox>
        <div>
          <Nav />
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
              <button onClick={onEditHandler}>저장</button>
            </FormBox>
          ) : (
            <FormBox>
              <input type="text" value={editPost.title} disabled />
              <textarea type="text" value={editPost.body} disabled />
            </FormBox>
          )}
        </div>
        <AddCommentForm />
        <CommentList />
      </Layout>
    </>
  );
};

export default DetailBoard;

{
  /* 버튼 클릭하면 isEdit상태에 따라 보여지는 아이콘이 다르게 세팅. */
}
{
  /* false상태가 취소, true상태가 세팅키 */
}
{
  /* <BtnBox>
        <div>Username : {todo?.username}</div>
        <div>
          <Button
            onClick={() => {
              setIsEdit((prev) => !prev);
            }}
          >

            {isEdit ? <FcCancel /> : <FcSettings />}
          </Button>
          <Button onClick={onDeleteHandler}>
            <FcFullTrash />
          </Button>
        </div>
      </BtnBox>
      {!isEdit ? (
        <div>
          <p>userid</p>
          <p>body</p>
        </div>
      ) : null} */
}
{
  /*
      {isEdit ? (
        <FormBox>
          <input
            type="text"
            value={editTodo.title}
            onChange={(e) => {
              {
                setEdittodo({ ...editTodo, title: e.target.value });
              }
            }}
          />
          <button onClick={onEditHandler}>저장</button>
        </FormBox>
      ) : null}
      <h2> 댓글 </h2>

    </div> */
}

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
