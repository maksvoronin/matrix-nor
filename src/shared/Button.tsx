import styled from "styled-components";

const Button = styled.div<{ width?: number, height?: number, borderradius?: number, weight?: number }>`
  background: var(--backgroundGradient);
  color: white;
  border: none;
  height: ${({height}) => height ? `${height}px` :  "90px" };
  display: flex;
  width: ${({ width }) => width ? `${width - 30}px` : "auto"};
  align-items: center;
  justify-content: center;
  font-weight: ${({weight}) => weight ? `${weight}` : 600};
  border-radius: ${({borderradius}) => borderradius ? `${borderradius}px` : `20px`};
  font-size: 18px;
  text-align: center;
  transition: box-shadow 0.3s;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    box-shadow: 0px 5px 20px #dc4eff65;
  }
  @media(max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export default Button;
