import { ResultType } from "@remix-run/router/dist/utils";
import { useDispatch } from "react-redux";

const Comment = (comment) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const [editComment, setEditComment] = useState({
    content: comment.content,
  });

  const onCommentEdit = (e) => {
    e.preventDefault();
    //빈칸있는지 확인하는 로직 얼럿 입력하고.

    // disapatch로 editcomment로 수정된 코멘트값을 받아온 comment props에 수정시켜서 보낸다.
    dispatch(__editComments({ ...comment, ...editComment }));
    setIsEdit(false);
  };

  //시간추가는 나중에 .
  return (
    <commentBox>
      {/* isEdit이 true상태일때 = comment 내용을 보여준다. 닉네임도추가가능함. */}
      {!isEdit ? (
        <TextBox>
          <p>{comment.content} </p>
        </TextBox>
      ) : (
        // false상태일시에 버튼이 바뀌고, input생기면서 onChange로 값을 받아서 -> CommentEdit으로 값을 보낸다. / thunk에.
        <Formbox>
          <input
            type="text"
            value={editComment.content}
            onChange={(e) => {
              setEditComment({ ...editComment, content: e.target.value });
            }}
          />
          <button onClick={onCommentEdit}>수정하기</button>
        </Formbox>
      )}
      <button onClick={() => setIsEdit((prev) => !prev)}>
        {isEdit ? 취소 : 수정}
      </button>

      {!isEdit ? (
        <button
          onClick={() => {
            e.stopPropagation();
            //alret2 삭제할래요?
            // if(result.isConfirmed){
            //   onCommentDelete()
            // }
          }}
        >
          삭제하기
        </button>
      ) : null}
    </commentBox>
  );
};
