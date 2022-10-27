import IsToken from "../Layout/IsToken";
import OutLayout from "../Layout/OutLayout";
import Myprofile from "../mypage/Myprofile";

function Mypage() {
  return (
    <IsToken>
      <OutLayout>
        <Myprofile />
      </OutLayout>
    </IsToken>
  );
}

export default Mypage;
