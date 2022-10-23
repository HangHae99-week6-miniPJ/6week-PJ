import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "../components/Card";
import LabelBottomNavigation from "../components/header/LabelBottomNavigation";
import Nav from "../components/header/Nav";

const DetailBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //edit기본값 false로 해놓음.
  const [isEdit, setIsEdit] = useState(false);

  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === +id);

  //게시글 수정하기.
  const [editPosts, setEditPosts] = useState({
    username: post?.username,
    title: post?.title,
    body: post?.body,
  });

  const onEditHandler = (e) => {
    e.preventDefault();
    // if (edit) dispatch(); //
    //edit상태변경시켜서 화면보이고안보이게만듬.
    setIsEdit(false);
  };

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    //sweetalret2사용. -> 다운로드필요.
    //삭제후 홈으로돌아가게.
  };

  const { id } = useParams();

  const initialState = {
    username: posts.username,
    title: posts.title,
    body: posts.body,
  };

  return (
    <div>
      <Nav />
      {/* <form>
        <input
          disabled
          type="text"
          name="username"
          value={posts.name}
          onChange={onChangeHandler}
          placeholder="작성자"
        />
        <input
          type="text"
          name="title"
          value={posts.title}
          onChange={onChangeHandler}
          placeholder="제목을 입력해 주세오"
        />
        <textarea
          name="body"
          id="inputbody"
          cols="20"
          rows="10"
          value={posts.body}
          onChange={onChangeHandler}
          placeholder="내용을 입력해 주세요."
        />
        <button onClick={onEditHandler}>추가하기</button>
      </form> */}
    </div>
  );
};

export default DetailBoard;

{
  /* 버튼 클릭하면 isEdit상태에 따라 보여지는 아이콘이 다르게 세팅. */
}
{
  /* false상태가 취소, true상태가 세팅키 */
}
{
  /* <BtnBox>
        <div>Username : {todo?.username}</div>
        <div>
          <Button
            onClick={() => {
              setIsEdit((prev) => !prev);
            }}
          >
          
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
      ) : null} */
}
{
  /* 
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
    
    </div> */
}

{
  /* AddCommentForm/ */
}
{
  /* CommentList */
}
