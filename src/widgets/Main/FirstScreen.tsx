import { observer } from "mobx-react";
import { FC } from "react";
import firstScreenBackground from "../../assets/firstScreen.png";
import { Button, Container } from "../../shared";
import styled from "styled-components";

const FSContainer = styled.div`
  background: url(${firstScreenBackground}) center no-repeat;
  background-size: cover;
  max-height: 800px;
  min-height: 50vh;
`;

const MainContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 30px);
  line-height: 1.33;
  height: 493px;
  gap: 21px;
`;

const MatrixNor = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  font-size: 72px;
  color: white;
  @media(max-width: 500px) {
    font-size: 48px;
  }
`;

const Transformation = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
  @media(max-width: 500px) {
    font-size: 24px;
  }
`;

const Europe = styled.h3`
  font-size: 24px;
  line-height: 1.33;
  text-align: center;
  font-weight: 600;
  @media(max-width: 500px) {
    font-size: 22px;
  }
`;

const CTAConstruction = styled(Container)`
  display: flex;
  justify-content: space-around;
  @media(max-width: 850px) {
    justify-content: center;
    img {
      display: none;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
`;

const FirstScreen: FC = observer(() => {
  return (
    <FSContainer id="first">
      <MainContainer>
        <Transformation>Transformation system</Transformation>
        <MatrixNor>Matrix Nor</MatrixNor>
        <Europe>Европейская система трансформации личности</Europe>
      </MainContainer>
      <CTAConstruction>
        <Buttons>
          <Button width={309} height={70} onClick={() => window.open("https://t.me/matrixnorhome")}>Узнать свой энерготип</Button>
          <Button width={309} height={70} onClick={() => window.open("https://t.me/+3dPeFDnatu44N2Yy")}>Диагностика сенсорных способностей</Button>
        </Buttons>
      </CTAConstruction>
    </FSContainer>
  );
});

export default FirstScreen;
