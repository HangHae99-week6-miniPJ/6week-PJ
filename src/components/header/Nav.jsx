import LabelBottomNavigation from "../header/LabelBottomNavigation";
import styled from "styled-components";

function Nav() {
  return (
    <StNav>
      <img alt="네브로고" src="image/titleLogo.png" width="100px" />
      <LabelBottomNavigation />
    </StNav>
  );
}

export default Nav;

/*네브바 스타일 */
const StNav = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 20px auto;
`;
