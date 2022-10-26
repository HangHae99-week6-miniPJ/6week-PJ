import Myprofile from "../mypage/Myprofile";
import StLayout from "../Layout/StLayout";
import CheckToken from "../Layout/CheckToken";

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
