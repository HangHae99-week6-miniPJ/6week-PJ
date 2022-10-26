import Mymenu from "../mypage/Mymenu";
import StLayout from "../Layout/StLayout";
import CheckToken from "../Layout/CheckToken";

function Mypage() {
  return (
    <CheckToken>
      <StLayout>
        <Mymenu />
      </StLayout>
    </CheckToken>
  );
}

export default Mypage;
