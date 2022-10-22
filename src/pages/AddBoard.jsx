import { shallowEqual, useDispatch } from "react-redux";
import { initializeConnect } from "react-redux/es/components/connect";
import { useNavigate } from "react-router-dom";

const AddBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    username: "",
    title: "",
    body: "",
  };

  const [addBoard, setAddBoard] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddBoard({ ...AddBoard, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if( addBoard.username === "" || addBoard.title === "" || addBoard.body === "") {
    // }
    // Dispatch해서 thunk로 보낸다. 글쓰기 add에다가 보내야됨.
    dispatch(__onAddsth({ ...addBoard, id: Date.now() }));
    setAddBoard(initialState);
    //이거 nav탭에 박을건데 어디서눌리든 글쓰기해서 홈? 그 전으로돌아가는 기능 필요한듯.
    //window.history.back???이거쓰면되나.
    navigate("/");
  };

  return (
    <>
      <Layout>
        <Header />
        {/* 제목이랑 내용만 있으면 되니까... */}
        {/* 이거 로그인하면 어떻게 바꿔야하나?? */}
        <AddForm>
          <input
            type="text"
            name="username"
            value={addBoard.username}
            onChange={onChangeHandler}
            placeholder="작성자"
          />
          <input
            type="text"
            name="title"
            value={addBoard.title}
            onChange={onChangeHandler}
            placeholder="제목을 입력해 주세오"
          />
          <textarea
            name="body"
            id="inputbody"
            cols="20"
            rows="10"
            value={addBoard.body}
            onChange={onChangeHandler}
            placeholder="내용을 입력해 주세요."
          />
          <button onClick={onSubmitHandler}>추가하기</button>
        </AddForm>
      </Layout>
    </>
  );
};

export default AddBoard;
