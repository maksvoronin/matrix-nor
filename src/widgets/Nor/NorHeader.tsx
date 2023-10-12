import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";

const MatrixTitle = styled.h1`
  text-align: right;
  font-size: 64px;
  color: #dc4eff;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  margin-top: 19px;
  margin-bottom: 19px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const CenterText = styled.p`
  text-align: center;
  text-decoration-line: underline;
  line-height: normal;
  font-size: 21px;
  margin-bottom: 46px;
  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 0px;
  }
`;

const NorHeader: FC = observer(() => {
  return (
    <Container style={{ marginTop: 120 }}>
      <MatrixTitle>Matrix Nor</MatrixTitle>
      <Subtitle>Уникальная авторская методика работы с энергетическим полем</Subtitle>
      <CenterText>Метод даёт возможность самосовершенствоваться человеку и более осознанно выстраивать свою жизнь.</CenterText>
    </Container>
  );
});

export default NorHeader;
