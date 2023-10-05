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
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin: 0;
  padding: 0;
`;

const DecanatLine = styled.div`
  display: flex;
  gap: 48px;
`;

const DecanatGrid = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  gap: 40px;
`;

const DecanatCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const DecanatInfo = styled.div`
  display: flex;
  gap: 34px;
  img {
    width: 85px;
    height: 85px;
    border-radius: 500px;
    background: #d9d9d9;
  }
`;

const DecanatName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    font-size: 22px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

const DecanatRole = styled.p`
  margin-top: 13px;
`;

const TgButton = styled(Button)`
  margin: 0 auto;
  margin-top: 60px;
  gap: 17px;
`;

const DecanatBlock: FC = observer(() => {
  return (
    <Container>
      <Title>Территориальные руководители проекта</Title>
      <Subtitle>Организация системного обучения, личные консультации</Subtitle>
      <DecanatGrid>
        <DecanatLine>
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
        </DecanatLine>
        <DecanatLine>
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
        </DecanatLine>
      </DecanatGrid>
      <TgButton width={300} height={90}>
        <img src={tgIcon} alt="tg" />
        Задать вопрос
      </TgButton>
    </Container>
  );
});

export default DecanatBlock;
