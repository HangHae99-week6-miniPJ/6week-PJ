import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.commentList);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  return (
    <div>
      {/* map, get해온 coomentDB활용해서 카드찍어라.ㅎ. */}
      {/* 삼항연산자 활용해서 , 옵셔널체이닝없이? */}
    </div>
  );
};
