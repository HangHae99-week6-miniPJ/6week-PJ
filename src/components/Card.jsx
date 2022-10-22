import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      onClick=
      {() => {
        // id받아올게없어서 힘든데 json목업이라도?
        //   navigate(`/detail/${받아온id}`);
      }}
      {/*props로 받아온 title,contents,id를 보여준다. 프로필사진포함인데.. */}
      <div>{title}</div>
      <div>{body}</div>
      <div>{id}</div>
    </div>
  );
};

export default Card;
