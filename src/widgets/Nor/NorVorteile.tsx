import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import galka from "../../assets/galkaPurple.png";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: start;
  gap: 14px;
  margin-bottom: 36px;
`;

const Ul = styled.ul`
  font-size: 24px;
`;

const Text = styled.p`
  font-size: 26px;
  margin-bottom: 13px;
`;

const NorVorteile: FC = observer(() => {
  return (
    <Container>
      <Title>
        <img src={galka} alt="Purple galka" />
        ️ПОСЛЕ ОБУЧЕНИЯ ВЫ ПОЛУЧИТЕ НОВЫЕ ВОЗМОЖНОСТИ И ОТКРОЕТЕ СПОСОБНОСТИ О КОТОРЫХ НЕ ЗНАЛИ РАНЕЕ.
      </Title>
      <Title>
        <img src={galka} alt="Purple galka" />
        СМОЖЕТЕ САМОСТОЯТЕЛЬНО РЕШАТЬ СОБСТВЕННЫЕ ПРОБЛЕМЫ И ПОМОГАТЬ ЛЮДЯМ:{" "}
      </Title>
      <Ul>
        <li>Раскрывать сенсорные способности и внутренний потенциал.</li>
        <li>Чётко понимать внутренние эмоциональные и энергетические процессы, высвобождать заблокированные ресурсы для достижения целей. </li>
        <li>Повышать не только самооценку, а чётко следовать своему предназначению.</li>
        <li>Работать с энергетическим полем, ликвидировать деструктивные программы, работать с блоками и накопленным эмоциональным негативом.</li>
        <li>Прорабатывать зависимости во взаимоотношениях.</li>
      </Ul>
      <Text>
        <i>
          <b>Но главное</b>, вы открываете в себе возможность чувствовать на энергетическом уровне прошлое, настоящее и будущее. И осознанно принимать решения.
        </i>
      </Text>
      <Text>
        <b>Это не магия и не сверхъестественное, это то, что заложено природой в каждом человеке.</b>
      </Text>
    </Container>
  );
});

export default NorVorteile;
