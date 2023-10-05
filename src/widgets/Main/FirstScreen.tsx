import { observer } from "mobx-react";
import { FC } from "react";
import firstScreenBackground from "../../assets/firstScreen.png";
import { Button, Container } from "../../shared";
import styled from "styled-components";

const FSContainer = styled.div`
  background: url(${firstScreenBackground}) center no-repeat;
  background-size: cover;
  max-height: 800px;
  height: 100vh;
`;

const MainContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  line-height: 1.33;
  height: 493px;
  gap: 21px;
`;

const MatrixNor = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  font-size: 72px;
  color: var(--purple);
`;

const Transformation = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Europe = styled.h3`
  font-family: "Pacifico";
  font-size: 28px;
  line-height: 1.33;
`;

const CTAConstruction = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const Photo = styled.img`
  width: 263px;
  height: 307px;
  background: #d9d9d9;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FirstScreen: FC = observer(() => {
  return (
    <FSContainer>
      <MainContainer>
        <Transformation>Transformation system</Transformation>
        <MatrixNor>Matrix Nor</MatrixNor>
        <Europe>Европейская система трансформации личности</Europe>
      </MainContainer>
      <CTAConstruction>
        <Photo />
        <Buttons>
          <Button width={309}>Узнать свой энерготип</Button>
          <Button width={309}>Диагностика сенсорных способностей</Button>
        </Buttons>
        <Photo />
      </CTAConstruction>
    </FSContainer>
  );
});

export default FirstScreen;
