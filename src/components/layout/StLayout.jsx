import styled from "styled-components";
import { Outline } from "../../shared/Outline";

function StLayout({ children }) {
  return <LayoutBox>{children}</LayoutBox>;
}

const LayoutBox = styled.div`
  ${Outline}
  max-width: 1000px;
  min-width: 800px;
  margin: 40px auto;
`;

export default StLayout;
