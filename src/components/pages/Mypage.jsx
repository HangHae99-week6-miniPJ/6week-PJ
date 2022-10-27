import StLayout from "../Layout/StLayout";
import CheckToken from "../Layout/CheckToken";
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
