import styled from "styled-components";
import { Flexbox } from "../../shared/Flexbox";

/** 만능버튼 */
function MuButton(props) {
  const {
    _width,
    children,
    _onClick,
    _padding,
    _bgColor,
    _color,
    _fontSize,
    _fontWeight,
    borderRadius,
    _hoverColor,
    _hoverBgColor,
    _border,
    _margin,
  } = props;

  const styles = {
    _width,
    _padding,
    _bgColor,
    _color,
    _fontSize,
    _fontWeight,
    borderRadius,
    _hoverColor,
    _hoverBgColor,
    _border,
    _margin,
  };
  return (
    <Btn {...styles} onClick={_onClick}>
      {children}
    </Btn>
  );
}

MuButton.defaultProps = {
  _onClick: () => {},
  _width: "120px",
  _padding: "12px",
  _bgColor: "#2c61e8",
  _color: "#ffffff",
  _fontSize: "1rem",
  borderRadius: "10px",
  _fontWeight: "500",
  _hoverColor: "#ffffff",
  _hoverBgColor: "#648cf3",
  _border: "none",
};

export default MuButton;

const Btn = styled.button`
  ${Flexbox};
  width: ${(props) => props._width || "100%"};
  padding: ${(props) => props._padding};
  margin: ${(props) => props._margin};
  background-color: ${(props) => props._bgColor};
  font-size: ${(props) => props._fontSize};
  font-weight: ${(props) => props._fontWeight};
  color: ${(props) => props._color};
  border: ${(props) => props._border};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    color: ${(props) => props._hoverColor};
    background-color: ${(props) => props._hoverBgColor};
  }
`;
