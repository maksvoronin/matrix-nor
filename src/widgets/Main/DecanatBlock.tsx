import { observer } from "mobx-react";
import { FC } from "react";
import { Button, Container } from "../../shared";
import styled from "styled-components";
import tgIcon from "../../assets/tgIcon.png";

import helena from "../../assets/helena.jpg";
import irina_pelz from "../../assets/irina_pelz.jpg";
import joanna from "../../assets/joanna_lada.jpg";
import jully from "../../assets/jully.jpg";
import lena from "../../assets/lena_garyanova.jpg";
import mery from "../../assets/mery.jpg";
import natalya from "../../assets/natalya_be.jpg";
import natalya_ebers from "../../assets/natalya_ebers.jpg";
import olga from "../../assets/olga.jpg";
import svetlana from "../../assets/svetlana.jpg";

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
  @media (max-width: 630px) {
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
  @media (max-width: 500px) {
    gap: 20px;
  }
`;

const Img = styled.div<{ src: string }>`
  min-width: 85px;
  height: 85px;
  background: url(${({src}) => src}) no-repeat;
  background-size: 100%;
  border-radius: 500px;
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

const TgButton = styled(Button)`
  margin: 0 auto;
  margin-top: 60px;
  gap: 17px;
`;

const DecanatBlock: FC = observer(() => {
  return (
    <Container id="decanat">
      <Title>Территориальные руководители проекта</Title>
      <Subtitle>
        Организация системного обучения.
        <br />
        Личные консультанты.
      </Subtitle>
      <DecanatGrid>
        <DecanatCard>
          <DecanatInfo>
            <Img src={natalya_ebers}  />
            <DecanatName>
              <h1>Nataliya Ebers</h1>
              <p>Germany, Stadt Hamm</p>
              <p>Ведущий куратор, Магистр MatrixNor, таролог, хиромант, экстрасенс</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={olga}  />
            <DecanatName>
              <h1>Olga Shereper</h1>
              <p>Italy, Milan</p>
              <p>Магистр MatrixNor, Астропсихолог, Нумеролог</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={mery}  />
            <DecanatName>
              <h1>Mary Zhyhaylo</h1>
              <p>Germany, Stadt Nürnberg</p>
              <p>Магистр MatrixNor, Нумеролог, Биоэнерготерапевт </p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={svetlana}  />
            <DecanatName>
              <h1>Светлана Пржевальская</h1>
              <p>Россия, г. Москва</p>
              <p>Магистр MatrixNor, Нумеролог, инструктор системы Наули, женский энергопрактик</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={lena}  />
            <DecanatName>
              <h1>Елена Гаряинова</h1>
              <p>Россия, г. Москва</p>
              <p>Магистр MatrixNor, Нумеролог, Таролог, Биоэнерготерапевт, Гадание на Таро</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={jully}  />
            <DecanatName>
              <h1>Julie Schulze</h1>
              <p>USA, North Carolina</p>
              <p>Магистр MatrixNor, Гипнолог, Профайлер, Энерготерапевт.</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={irina_pelz}  />
            <DecanatName>
              <h1>Irina Pelz</h1>
              <p>France, Colmar</p>
              <p>Магистр MatrixNor, Экстрасенс, Биоэнерготерапевт, Хиромант.</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={joanna}  />
            <DecanatName>
              <h1>Joanna Lada</h1>
              <p>England, Boston</p>
              <p>Магистр MatrixNor, Биоэнерготерапевт, Арома и Стоун терапевт.</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={natalya}  />
            <DecanatName>
              <h1>Наталия Бингелис</h1>
              <p>Россия, Новосибирск</p>
              <p>Магистр MatrixNor, Таролог, Биоэнерготерапевт</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
        <DecanatCard>
          <DecanatInfo>
            <Img src={helena}  />
            <DecanatName>
              <h1>Хелена Урбан</h1>
              <p>Россия, Беларусь</p>
              <p>Ведущий куратор, Мастер MatrixNor</p>
            </DecanatName>
          </DecanatInfo>
        </DecanatCard>
      </DecanatGrid>
      <TgButton width={300} height={90} onClick={() => window.open("https://t.me/+GfFenfWNV3kxYWFi")}>
        <img src={tgIcon} alt="tg" />
        Задать вопрос
      </TgButton>
    </Container>
  );
});

export default DecanatBlock;
