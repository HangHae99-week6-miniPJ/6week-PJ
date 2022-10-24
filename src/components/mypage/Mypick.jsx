import styled from "styled-components";
import { Outline } from "../../shared/Outline";

function Mypick() {
  return (
    <>
      <List>카드가져오기</List>
    </>
  );
}

export default Mypick;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 17px;
  padding-top: 50px;
`;
