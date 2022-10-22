import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

const DetailBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //edit기본값 false로 해놓음.
  const [isEdit, setIsEdit] = useState(false);
  const [editsth, setEditSth] = useState({
    title: "",
    body: "",
  });

  //data get으로 받아옴.
  //useEffect사용.

  const onEditHandler = () => {
    e.preventDefault();
    //빈칸유효성검사, sweetalret2로 alret사용.

    dispatch(); //editthunk)
    //edit상태변경시켜서 화면보이고안보이게만듬.
    setIsEdit(false);
  };

  const onDeleteHandler = () => {
    e.stopPropagation();
    //sweetalret2사용. -> 다운로드필요.
    //삭제후 홈으로돌아가게.
  };

  const { id } = useParams();
  //useSelector이용해서 상태 구독.

  return (
    <div>
      <Header></Header>
      <BtnBox>
        <div>Username : {todo?.username}</div>
        <div>
          <Button
            onClick={() => {
              setIsEdit((prev) => !prev);
            }}
          >
            {/* 버튼 클릭하면 isEdit상태에 따라 보여지는 아이콘이 다르게 세팅. */}
            {/* false상태가 취소, true상태가 세팅키 */}
            {isEdit ? <FcCancel /> : <FcSettings />}
          </Button>
          <Button onClick={onDeleteHandler}>
            <FcFullTrash />
          </Button>
        </div>
      </BtnBox>
      {!isEdit ? (
        <div>
          <p>userid</p>
          <p>body</p>
        </div>
      ) : null}

      {isEdit ? (
        <FormBox>
          <input
            type="text"
            value={editTodo.title}
            onChange={(e) => {
              {
                setEdittodo({ ...editTodo, title: e.target.value });
              }
            }}
          />
          <button onClick={onEditHandler}>저장</button>
        </FormBox>
      ) : null}
      <h2> 댓글 </h2>
      {/* AddCommentForm/ */}
      {/* CommentList */}
    </div>
  );
};

export default DetailBoard;
