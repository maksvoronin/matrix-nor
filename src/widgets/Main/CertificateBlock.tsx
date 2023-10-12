import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";
import galka from "../../assets/galka.png";
import downArrow from "../../assets/downArrow.svg";

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 36px;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const CertContainer = styled.div`
  width: 160px;
  height: 150px;
  background: var(--purpleGradient);
  display: flex;
  justify-content: start;
  text-align: center;
  align-items: center;
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  line-height: normal;
  padding-left: 41px;
  padding-right: 41px;
  border-radius: 20px;
`;

const CertList = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 1040px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const CertBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
`;

const CertInfo = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px 30px;
  width: 180px;
`;

const Ul = styled.ul`
  color: #ff21e9;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  li {
    margin-bottom: 14px;
    &::marker {
      width: 28px;
      height: 28px;
      font-size: 28px;
    }
    span {
      color: #fff;
      font-size: 18px;
      display: block;
    }
  }
`;

const CertificateBlock: FC = observer(() => {
  return (
    <Container>
      <Title>
        <img src={galka} alt="Galka" />
        Получить Международный сертификат специалиста
      </Title>
      <CertList>
        <CertBlock>
          <CertContainer>Обучение метод MATRIX NOR</CertContainer>
          <img src={downArrow} alt="downArrow" />
          <CertInfo>
            <Ul>
              <li>
                <span>Интеграция энергетического состояния</span>
              </li>
              <li>
                <span>Раскрытие экстрасенсорных способностей</span>
              </li>
              <li>
                <span>Работа с травмирующими событиями прошлого и настоящего</span>
              </li>
              <li>
                <span>Трасформация внутреннего потенциала</span>
              </li>
            </Ul>
          </CertInfo>
        </CertBlock>
        <CertBlock>
          <CertContainer>Обучение метод MATRIX ID</CertContainer>
          <img src={downArrow} alt="downArrow" />
          <CertInfo>
            <Ul>
              <li>
                <span>Матрица личности, астронумерология</span>
              </li>
              <li>
                <span>Доказательная диагностика личности</span>
              </li>
              <li>
                <span>Совместимость энерготипов</span>
              </li>
              <li>
                <span>Определение энергопотенциала и способностей человека </span>
              </li>
              <li>
                <span>Предназначение и правильное использование собственного потенциала</span>
              </li>
            </Ul>
          </CertInfo>
        </CertBlock>
        <CertBlock>
          <CertContainer>Обучение метод MATRIX SG</CertContainer>
          <img src={downArrow} alt="downArrow" />
          <CertInfo>
            <Ul>
              <li>
                <span>открытие канала коммуникации с энерго-информационным полем</span>
              </li>
              <li>
                <span>понятие иерархии сознания и подсознания</span>
              </li>
              <li>
                <span>вход в состояние транса</span>
              </li>
              <li>
                <span>практика запросов и получения информации</span>
              </li>
              <li>
                <span>*Международный сертификат специалиста</span>
              </li>
              <li>
                <span>К сожалению, освоение метода доступно не всем. Предварительно мы проводим диагностику возможностей.</span>
              </li>
            </Ul>
          </CertInfo>
        </CertBlock>
        <CertBlock>
          <CertContainer>WEBINAR's & MEDITATION's</CertContainer>
          <img src={downArrow} alt="downArrow" />
          <CertInfo>
            <Ul>
              <li>
                <span>групповые занятия</span>
              </li>
              <li>
                <span>медитации на восстановление энергетического состояния</span>
              </li>
              <li>
                <span>работа с родовыми каналами</span>
              </li>
              <li>
                <span>проработка и повышение целеустремлённости</span>
              </li>
              <li>
                <span>редукция негативных программ</span>
              </li>
              <li>
                <span>установки энергетической защиты</span>
              </li>
            </Ul>
          </CertInfo>
        </CertBlock>
      </CertList>
    </Container>
  );
});

export default CertificateBlock;
