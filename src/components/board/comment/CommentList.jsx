import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getComments } from "../../../redux/modules/commentListSlice";
import Comment from "./Comment";

const CommentList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state.commentList);

  console.log(comment);

  useEffect(() => {
    dispatch(__getComments(+id));
  }, [dispatch]);

  return (
    <Commentblock>
      {/* {comment?.map((comments) => {
        return (
          <Comment key={comments?.postId} comment={comments}>
            댓글
          </Comment>
        );
      })} */}
    </Commentblock>
  );
};

export default CommentList;

const Commentblock = styled.div`
  margin-top: 20px;
  height: 250px;
`;
