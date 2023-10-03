import styled from "styled-components";

const Button = styled.div<{ width?: number }>`
  background: var(--backgroundGradient);
  color: white;
  border: none;
  min-height: 90px;
  display: flex;
  width: ${({ width }) => `${width}px` || "auto"};
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 20px;
  font-size: 18px;
  text-align: center;
  transition: box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 20px #dc4eff65;
  }
`;

export default Button;
