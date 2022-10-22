import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Link to="/">갓생</Link>
      <button>마이페이지</button>
      <button>게시판</button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-width: 450px;
  width: 100%;
  height: 50px;
  box-shadow: 3px 5px 5px 1px gray;
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
