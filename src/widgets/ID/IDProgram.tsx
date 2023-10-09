import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";
import pyramid from "../../assets/pyramid.png";

const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;

  img {
    width: 393px;
    height: 393px;
    max-width: 100%;
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
  }
`;

const Star = styled.p`
  color: #28dfff;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  margin-top: 16px;
`;

const IDProgram: FC = observer(() => {
  return (
    <Container>
      <Title>Программа обучения</Title>
      <Content>
        <Ul>
          <li>Вибрация цифр, планетарная связь.</li>
          <li>Формула расчета Матрицы, значение цифр.</li>
          <li>Профиль человека.</li>
          <li>Определение энерго потенциала, эзотерических способностей.</li>
          <li>Определение совместимости людей.</li>
          <li>Годовые циклы человека.</li>
          <li>Работа с датами, подбор по необходимым параметрам.</li>
          <li>Цифровые коды.</li>
          <li>Практика консультирования.</li>
        </Ul>
        <img src={pyramid} alt="pyramid" />
      </Content>
      <Star>* После обучения вы получите сертификат специалиста. </Star>
    </Container>
  );
});

export default IDProgram;
