import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getComments } from "../../../redux/modules/commentListSlice";
import Comment from "./Comment";

const CommentList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.commentList);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  console.log(comments);
  return (
    <Commentblock>
      {comments.map((comment) => {
        return comment.postId === Number(id) ? (
          <Comment key={comment.id} comment={comment}>
            댓글
          </Comment>
        ) : null;
      })}
    </Commentblock>
  );
};

export default CommentList;

const Commentblock = styled.div`
  margin-top: 20px;
  height: 250px;
`;
