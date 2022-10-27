import CheckToken from "../Layout/CheckToken";
import OutLayout from "../Layout/OutLayout";
import Myprofile from "../mypage/Myprofile";

function Mypage() {
  return (
    <CheckToken>
      <OutLayout>
        <Myprofile />
      </OutLayout>
    </CheckToken>
  );
}

export default Mypage;
