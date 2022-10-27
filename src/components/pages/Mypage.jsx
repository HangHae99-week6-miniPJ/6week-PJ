import CheckToken from "../Layout/CheckToken";
import StLayout from "../Layout/StLayout";
import Myprofile from "../mypage/Myprofile";

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
