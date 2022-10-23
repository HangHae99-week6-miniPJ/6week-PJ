import MyBox from "./MyBox";
import styled from "styled-components";
import Card2 from "../components/Card2";
import { Outline } from "../shared/Outline";

function Mypick() {
  return (
    <div>
      <MyBox>
        <List>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </List>
      </MyBox>
    </div>
  );
}

export default Mypick;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 17px;
`;
