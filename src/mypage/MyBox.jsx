import styled from "styled-components";
import { Outline } from "../shared/Outline";

function MyBox({ children }) {
  return (
    <Contain>
      <ConTitle>
        <p>변경하기</p>
      </ConTitle>
      {children}
    </Contain>
  );
}

export default MyBox;

/*컨테이너 박스*/
const Contain = styled.div`
  ${Outline};
`;

/*컨테이너 타이틀*/
const ConTitle = styled.div`
  p {
    font-weight: bolder;
    font-size: 3rem;
    margin-left: 20px;
  }
`;
