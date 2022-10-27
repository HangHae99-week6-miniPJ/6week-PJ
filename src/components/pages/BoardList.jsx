import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBoard from "../board/list/CardBoard";
import { __getCategoryPosts, __getPosts } from "../../redux/modules/postsSlice";

// Css영역 import
import styled from "styled-components";
import { Outline } from "../../shared/Outline";
import StLayout from "../Layout/StLayout";
<<<<<<< HEAD
=======
import { flexbox } from "@mui/system";
>>>>>>> 4632aeec8120cc0758fc85193045a61ab2291d3d

function BoardList() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(0);
  const { posts } = useSelector((state) => state.posts);

  //카테고리변경될때마다 랜더링.
  useEffect(() => {
    if (category === 0) {
      dispatch(__getPosts()); //category0번일때실행
    } else {
      dispatch(__getCategoryPosts(category));
    }
  }, [dispatch, category]);

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  const onChangeHandler = (e) => {
    console.log("1");
    setCategory(e.target.value);
  };

  return (
    <StLayout>
<<<<<<< HEAD
      {/* category */}
      <select name="categoryId" value={category} onChange={onChangeHandler}>
        <option value={0} disabled>
          카테고리
        </option>
        <option value={1}>자기관리</option>
        <option value={2}>식습관</option>
        <option value={3}>마음챙김</option>
        <option value={4}>취미</option>
        <option value={5}>기타</option>
      </select>
      {/* Card */}
=======
>>>>>>> 4632aeec8120cc0758fc85193045a61ab2291d3d
      <List>
        <Select name="categoryId" value={category} onChange={onChangeHandler}>
          <option value={0} disabled>
            카테고리
          </option>
          <option value={1}>자기관리</option>
          <option value={2}>식습관</option>
          <option value={3}>마음챙김</option>
          <option value={4}>취미</option>
          <option value={5}>기타</option>
        </Select>
        <span>게시글 작성하기🖍</span>
        <CardBox>
          {posts?.map((post) => {
            return <CardBoard key={post.postId} post={post} />;
          })}
        </CardBox>
      </List>
    </StLayout>
  );
}

export default BoardList;

const Select = styled.select`
  width: 50%;
  height: 40px;
  font-size: 16px;
  border: 2px solid #40424454;
  border-radius: 10px;
  display: flex;
  margin: auto;
`;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  align-items: center;
  span {
    font-weight: bolder;
    font-size: 2rem;
    margin: 30px;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;
