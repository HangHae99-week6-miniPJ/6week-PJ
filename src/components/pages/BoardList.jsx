import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBoard from "../board/list/CardBoard";
import { __getCategoryPosts, __getPosts } from "../../redux/modules/postsSlice";

// Css영역 import
import styled from "styled-components";
import { Outline } from "../../shared/Outline";

function BoardList() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState(0);

  const { posts } = useSelector((state) => state.posts);

  //const accessToken = window.localstroage.accesstoken
  // axios('url'),{
  //   Headers: {authorization : bearer $ accessToken}
  // }

  //reducer생성, category===0, getPosts x-> categorypost:id

  //카테고리변경될때마다 랜더링.
  useEffect(() => {
    if (category === 0) {
      dispatch(__getPosts()); //category0번일때실행
    } else {
      dispatch(__getCategoryPosts(category));
    }
  }, [dispatch, category]);

  const onChangeHandler = (e) => {
    console.log("1");
    setCategory(e.target.value);
  };

  return (
    <>
      {/* category */}
      <select name="categoryId" value={category} onChange={onChangeHandler}>
        <option value={0}>카테고리</option>
        <option value={1}>자기관리</option>
        <option value={2}>식습관</option>
        <option value={3}>마음챙김</option>
        <option value={4}>취미</option>
        <option value={5}>기타</option>
      </select>
      {/* Card */}
      <List>
        {posts?.map((post) => {
          return <CardBoard key={post.postId} post={post} />;
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
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 50px;
`;

const Select = styled.select`
  width: 50%;
  height: 40px;
  font-size: 16px;
  border: 2px solid #40424454;
  border-radius: 10px;
  display: flex;
  margin: auto;
`;

// /*입력값 텍스트*/
// const StText = styled.div`
//   font-size: 25px;
//   font-weight: 500;
//   margin: 10px 0px 10px 0px;
// `;

// /*입력값 폼 스타일*/
// const StForm = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
// `;

// /*제목창 스타일*/
// const Input = styled.input`
//   width: 100%;
//   height: 40px;
//   border: 2px solid #40424454;
//   border-radius: 10px;
//   font-size: 16px;
//   padding: 5px 10px;
// `;

// /*내용창 스타일 */
// const Textarea = styled.textarea`
//   width: 100%;
//   border: 2px solid #40424454;
//   padding: 12px;
//   font-size: 16px;
//   border-radius: 10px;
//   resize: none;
//   &:focus {
//     outline: none;
//   }
// `;

// /*전체 박스*/
// const StBox = styled.div`
//   width: 100%;
// `;

/*색상선택*/
