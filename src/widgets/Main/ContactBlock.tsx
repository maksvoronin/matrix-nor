import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";
import whatsapp from "../../assets/whatsapp.png";
import viber from "../../assets/viberlogo.png";
import instagram from "../../assets/instagram.webp";
import tiktok from "../../assets/tiktok-1.svg";
import youtube from "../../assets/youtube-3.svg";
import telegram from "../../assets/tgIcon.png";

const ContactContainer = styled(Container)`
  padding: 38px;
  background: linear-gradient(95deg, rgba(242, 162, 68, 0.83) 0%, rgba(231, 81, 255, 0.8) 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: calc(100% - 86px);
  max-width: calc(1025px - 86px);
  a {
    color: white;
  }
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    a {
      color: white;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    img {
      width: 22px;
      height: 22px;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-weight: 400;
`;

const ContactRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ContactBlock: FC = observer(() => {
  return (
    <ContactContainer id="contact">
      <Title>Контакты</Title>
      <ContactRow>
        <ContactColumn>
          <p>Лилия Нор</p>
          <p>Запись на личную online консультацию</p>
          <p>
            <img src={viber} alt="Viber" />
            <img src={whatsapp} alt="whatsapp" />
            +49 176 569 75 335
          </p>
          <p>
            <a href="https://youtube.com/@LiliaNor">
              <img src={youtube} alt="yt" />
              YouTube
            </a>
          </p>
          <p>
            <a href="www.tiktok.com/@lilianor_matrix">
              <img src={tiktok} alt="Instagram" />
              TikTok
            </a>
          </p>
          <p>
            <a href="https://instagram.com/lilia_nor">
              <img src={instagram} alt="Instagram" />
              Instagram
            </a>
          </p>
        </ContactColumn>
        <ContactColumn>
          <p>Юлия Нор</p>
          <p>Запись на личную online консультацию</p>
          <p>
            <img src={viber} alt="Viber" />
            <img src={whatsapp} alt="Viber" />
            +7 909 279 27 77
          </p>
          <p>
            <a href="https://instagram.com/iulia_nor">
              <img src={instagram} alt="Instagram" />
              Instagram
            </a>
          </p>
        </ContactColumn>
      </ContactRow>
      <p>
        <a href="https://t.me/matrixnor">
          <img src={telegram} alt="tg" />
          Telegram Matrix Nor
        </a>
      </p>
    </ContactContainer>
  );
});

export default ContactBlock;
