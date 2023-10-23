import { observer } from "mobx-react";
import { FC, useState } from "react";
import { Container } from "../../shared";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 22px;
  color: var(--purple);
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Text = styled.div`
  h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    line-height: 1.47;
    margin-bottom: 20px;
    @media (max-width: 500px) {
      max-width: none;
    }
  }
  ul {
    margin-top: 0;
    padding-left: 18px;
    font-size: 18px;
    color: #dc4eff;
    li {
      margin-bottom: 10px;
      span {
        color: white;
      }
    }
  }
`;
const More = styled.p`
  font-size: 18px;
  line-height: 1.47;
  color: #dc4eff;
  margin-top: 15px;
  cursor: pointer;
  @media (max-width: 500px) {
    max-width: none;
  }
`;

const AboutEducation: FC = observer(() => {
  const [moreInfo, setMoreInfo] = useState<boolean>(false);

  return (
    <Container>
      <Title>Method MATRIX NOR</Title>
      <Text>
        <p>
          Человек самостоятельно способен настроить своё энергетическое поле, отменить все негативные установки, убрать психоэмоциональные блоки и трансформировать не только физическое состояние, но и
          правильно воздействовать на ситуации в своей жизни.
        </p>
      </Text>
      {!moreInfo && <More onClick={() => setMoreInfo(true)}>Подробнее</More>}
      {moreInfo && (
        <Text>
          <p>
            Любой из нас является носителем определённого набора вибраций и наше поле выходит далеко за пределы тела. Энергетическое сенсорное восприятие поля является первичным источником поступления
            импульсов в наше тело, формируя сознание, вызывая ответные реакции и действия. И соответственно наша оболочка получает от окружения соответствующий ответ. Дальше вступает в " игру"
            эмоциональная сфера, меняющая внутренние вибрации, которые в свою очередь влияют на нашу физику.
          </p>
          <p>Метод позволяет стать настоящим АРХИТЕКТОРОМ собственной жизни. Восстановить первородный уровень энергии, найти сформированые негативные точки и перезаписать внутренние установки.</p>
          <p>Метод работает вне времени и пространства, на любом расстоянии.</p>
          <p>
            Мы знаем, как изменить не только ваше внутреннее состояние, но и реальность вокруг. Только правильное осознанное понимание себя, тонких настроек подсознания и работа с собственным
            энергетическим полем, дают возможность не только поднять свой вибрационный уровень, но и изменить все сферы своего существования.
          </p>
          <p>Пройдя ОБУЧЕНИЕ методу MATRIX NOR вы открываете собственные возможности:</p>
          <ul>
            <li>
              <span>Диагностировать уровень энергии и физического состояния человека.</span>
            </li>
            <li>
              <span>Исправлять нарушения целостности энергетического поля.</span>
            </li>
            <li>
              <span>Изменять внутренние установки.</span>
            </li>
            <li>
              <span>Открыть способности ясновидения и сенсорного восприятия.</span>
            </li>
            <li>
              <span>Определять потенциал и способности человека.</span>
            </li>
            <li>
              <span>Формировать сценарии событий.</span>
            </li>
            <li>
              <span>Ликвидировать разрушающие эмоции и ситуации в жизни.</span>
            </li>
          </ul>
          <More onClick={() => setMoreInfo(false)}>Скрыть</More>
        </Text>
      )}
    </Container>
  );
});

export default AboutEducation;
