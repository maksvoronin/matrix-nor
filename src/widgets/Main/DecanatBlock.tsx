import { observer } from "mobx-react";
import { FC } from "react";
import { Button, Container } from "../../shared";
import styled from "styled-components";
import tgIcon from "../../assets/tgIcon.png";

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  gap: 14px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-bottom: 15px;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin: 0;
  padding: 0;
`;

const DecanatGrid = styled.div`
  display: grid;
  margin-top: 60px;
  flex-direction: column;
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const DecanatCard = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    align-items: center;
  }
`;

const DecanatInfo = styled.div`
  display: flex;
  gap: 34px;
  img {
    width: 85px;
    height: 85px;
    border-radius: 500px;
    background: #d9d9d9;
    @media (max-width: 500px) {
      width: 75px;
      height: 75px;
    }
  }
  @media (max-width: 500px) {
    gap: 20px;
  }
`;

const DecanatName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    font-size: 22px;
    font-weight: 700;
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;

const DecanatRole = styled.p`
  margin-top: 13px;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const TgButton = styled(Button)`
  margin: 0 auto;
  margin-top: 60px;
  gap: 17px;
`;

const DecanatBlock: FC = observer(() => {
  return (
    <Container id="decanat">
      <Title>Территориальные руководители проекта</Title>
      <Subtitle>Организация системного обучения, личные консультации</Subtitle>
      <DecanatGrid>
        <DecanatCard>
          <DecanatInfo>
            <img alt="Avatar" />
            <DecanatName>
              <h1>Nataliya Ebers</h1>
              <p>Germany, Stadt Hamm</p>
              <p>Магистр MatrixNor</p>
            </DecanatName>
          </DecanatInfo>
          <DecanatRole>Ведущий куратор, Магистр MatrixNor</DecanatRole>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <img alt="Avatar" />
            <DecanatName>
              <h1>Ирина Пертрова</h1>
              <p>Германия, Мюнхен</p>
              <p>Магистр MatrixNor</p>
            </DecanatName>
          </DecanatInfo>
          <DecanatRole>Биоэнерготерапевт, Таролог</DecanatRole>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <img alt="Avatar" />
            <DecanatName>
              <h1>Ирина Пертрова</h1>
              <p>Германия, Мюнхен</p>
              <p>Магистр MatrixNor</p>
            </DecanatName>
          </DecanatInfo>
          <DecanatRole>Биоэнерготерапевт, Таролог</DecanatRole>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <img alt="Avatar" />
            <DecanatName>
              <h1>Ирина Пертрова</h1>
              <p>Германия, Мюнхен</p>
              <p>Магистр MatrixNor</p>
            </DecanatName>
          </DecanatInfo>
          <DecanatRole>Биоэнерготерапевт, Таролог</DecanatRole>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <img alt="Avatar" />
            <DecanatName>
              <h1>Ирина Пертрова</h1>
              <p>Германия, Мюнхен</p>
              <p>Магистр MatrixNor</p>
            </DecanatName>
          </DecanatInfo>
          <DecanatRole>Биоэнерготерапевт, Таролог</DecanatRole>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <img alt="Avatar" />
            <DecanatName>
              <h1>Ирина Пертрова</h1>
              <p>Германия, Мюнхен</p>
              <p>Магистр MatrixNor</p>
            </DecanatName>
          </DecanatInfo>
          <DecanatRole>Биоэнерготерапевт, Таролог</DecanatRole>
        </DecanatCard>
      </DecanatGrid>
      <TgButton width={300} height={90} onClick={() => window.open("https://t.me/matrix727")}>
        <img src={tgIcon} alt="tg" />
        Задать вопрос
      </TgButton>
    </Container>
  );
});

export default DecanatBlock;
