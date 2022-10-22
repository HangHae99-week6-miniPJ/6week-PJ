import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const initialState = {
    content: "",
    id: 0,
    todoId: +id,
  };

  const [comment, setComment] = useState(initialState);

  const onSubmitComment = (e) => {
    e.preventDefault();
    //빈칸 검사 및 alret2사용.

    dispatch(__addComments({ ...comment, id: Date.now() }));
    setComment(initialState);
  };

  return (
    <CommentInputBox>
      <input
        maxLength="30"
        type="text"
        value={comment.content}
        placeholder="댓글입력좀ㅎ"
        onChange={(e) => {
          setComment({
            ...comment,
            content: e.target.value,
          });
        }}
      />
      <button onClick={onSubmitComment}>추가하기</button>
    </CommentInputBox>
  );
};
