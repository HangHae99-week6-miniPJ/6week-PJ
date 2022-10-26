import Mymenu from "../mypage/Mymenu";
import StLayout from "../layout/StLayout";
import CheckToken from "../layout/CheckToken";

function Mypage() {
  return (
    <CheckToken>
      <StLayout>
        <Myprofile />
      </StLayout>
    </CheckToken>
  );
}

export default Mypage;
