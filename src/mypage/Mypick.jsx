import styled from "styled-components";
import CardBoard from "../components/CardBoard";
import { Outline } from "../shared/Outline";

function Mypick() {
  return (
    <>
      <List>'card'</List>
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
