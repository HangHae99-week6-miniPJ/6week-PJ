import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBoard from "../board/list/CardBoard";
import { __getPosts } from "../../redux/modules/postsSlice";

// Css영역 import
import styled from "styled-components";
import { Outline } from "../../shared/Outline";
import StLayout from "../layout/StLayout";

function BoardList() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <StLayout>
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
    </StLayout>
  );
}

export default BoardList;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 50px;
`;
