import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Container } from "../shared";
import whatsapp from "../assets/whatsapp.png";
import viber from "../assets/viberlogo.png";
import instagram from "../assets/instagram.webp";
import tiktok from "../assets/tiktok-1.svg";
import youtube from "../assets/youtube-3.svg";

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 50px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1025px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: calc(100% - 30px);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  a {
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const ContactRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    a {
      color: white;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const Footer: FC = observer(() => {
  return (
    <footer>
      <FooterContainer>
        <ContactRow style={{ marginBottom: 20 }}>
          <ContactColumn>
            <p>
              <b>Лилия Нор</b>
            </p>
            <p>Запись на личную online консультацию</p>
            <p>
              <img src={viber} alt="Viber" />
              <img src={whatsapp} alt="whatsapp" />
              <a href="https://wa.me/+4917656975335" target="_blank">
                +49 176 569 75 335
              </a>
            </p>
            <p>
              <a href="https://youtube.com/@LiliaNor" target="_blank">
                <img src={youtube} alt="yt" />
                YouTube
              </a>
              <a href="https://www.tiktok.com/@lilianor_matrix" target="_blank">
                <img src={tiktok} alt="Instagram" />
                TikTok
              </a>
              <a href="https://instagram.com/lilia_nor" target="_blank">
                <img src={instagram} alt="Instagram" />
                Instagram
              </a>
            </p>
          </ContactColumn>
          <ContactColumn>
            <p>
              <b>Юлия Нор</b>
            </p>
            <p>Запись на личную online консультацию</p>
            <p>
              <img src={viber} alt="Viber" />
              <img src={whatsapp} alt="Viber" />
              <a href="https://wa.me/+79092792777" target="_blank">
                +7 909 279 27 77
              </a>
            </p>
            <p>
              <a href="https://instagram.com/iulia_nor" target="_blank">
                <img src={instagram} alt="Instagram" />
                Instagram
              </a>
            </p>
          </ContactColumn>
        </ContactRow>
        <ContactRow>
          <ContactColumn>
            <p>Информация, размещенная на сайте, носит исключительно информационно-рекламный характер и не является офертой или публичной офертой</p>
            <p>
              © Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на
              источник
            </p>
            <a href="mailto:matrixnorhome@gmail.com">matrixnorhome@gmail.com</a>
          </ContactColumn>
        </ContactRow>
      </FooterContainer>
    </footer>
  );
});

export default Footer;
