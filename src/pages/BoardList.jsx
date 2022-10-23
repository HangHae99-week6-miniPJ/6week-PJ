import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import LabelBottomNavigation from "../components/header/LabelBottomNavigation";
import Nav from "../components/header/Nav";
import { __getPosts } from "../redux/modules/postsSlice";

function BoardList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
    console.log("hello");
  }, [dispatch]);

  console.log(posts);
  return (
    <>
      <div>
        <Nav />
      </div>
      {/* <button
        onClick={() => {
          navigate("/add-board");
        }}
      >
        작성하기
      </button> */}
      {/* detailBoard가 cardlist역할을 한다. */}
      <div>카테고리</div>
      <div>
        {posts?.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}

export default BoardList;
