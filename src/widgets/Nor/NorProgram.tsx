import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";
import planet from "../../assets/planet.png";

const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  img {
    max-width: 100%;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Ul = styled.ul`
  li {
    list-style: decimal;
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.47;
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const Star = styled.p`
  color: #dc4eff;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  margin-top: 16px;
  @media(max-width: 500px) {
    font-size: 16px;
  }
`;

const NorProgram: FC = observer(() => {
  return (
    <Container>
      <Title>Программа обучения</Title>
      <Content>
        <Ul>
          <li>Ментальное тело, фантом, энергетическое поле.</li>
          <li>Энергетические каналы человека, работа с энерго потоками.</li>
          <li>Диагностика человека, в том числе на расстоянии.</li>
          <li>Ликвидация негативных программ и установка защиты.</li>
          <li>Энергетическая проработка ситуаций и взаимоотношений.</li>
        </Ul>
        <img src={planet} alt="planet" />
      </Content>
      <Star>* После обучения вы получите сертификат специалиста. </Star>
    </Container>
  );
});

export default NorProgram;
