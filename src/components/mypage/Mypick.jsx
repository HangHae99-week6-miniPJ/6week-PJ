import styled from "styled-components";
<<<<<<< HEAD:src/mypage/Mypick.jsx
import CardBoard from "../components/CardBoard";
import { Outline } from "../shared/Outline";
=======
import { Outline } from "../../shared/Outline";
>>>>>>> 64714f9863a5613380220c7e85ac15dcaa5e1268:src/components/mypage/Mypick.jsx

function Mypick() {
  return (
    <>
<<<<<<< HEAD:src/mypage/Mypick.jsx
      <List>'card'</List>
=======
      <List>카드가져오기</List>
>>>>>>> 64714f9863a5613380220c7e85ac15dcaa5e1268:src/components/mypage/Mypick.jsx
    </>
  );
}

export default Mypick;

/*카드 정렬 */
const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 17px;
  padding-top: 50px;
`;
