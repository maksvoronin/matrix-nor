import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Container } from "../shared";

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
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
`;

const ContactRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 20px;
  @media(max-width: 620px) {
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
        <ContactRow>
          <ContactColumn>
            <p>Лилия Нор</p>
            <p>Запись на личную online консультацию</p>
            <p>+49 176 569 75 335</p>
            <p>
              <a href="https://youtube.com/@LiliaNor">YouTube</a>
              <a href="www.tiktok.com/@lilianor_matrix">TikTok</a>
              <a href="https://instagram.com/lilia_nor">Instagram</a>
            </p>
          </ContactColumn>
          <ContactColumn>
            <p>Юлия Нор</p>
            <p>Запись на личную online консультацию</p>
            <p>+7 909 279 27 77</p>
            <p>
              <a href="https://instagram.com/iulia_nor">Instagram</a>
            </p>
          </ContactColumn>
        </ContactRow>
      </FooterContainer>
    </footer>
  );
});

export default Footer;
