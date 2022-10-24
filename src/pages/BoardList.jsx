import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardBoard from "../components/CardBoard";
import { __getPosts } from "../redux/modules/postsSlice";

// Css영역 import
import styled from "styled-components";
import { Outline } from "../shared/Outline";

function BoardList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <>
      {/* need Category component ..필요없을지도?*/}
      <input
        type="text"
        placeholder="Category"
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      />

      <List>
        {posts?.map((post) => {
          return <CardBoard key={post.id} post={post} />;
        })}
      </List>
    </>
  );
}

export default BoardList;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 17px;
`;
