import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Container } from "../../shared";
import lilia from "../../assets/lilia_nor.png";
import julia from "../../assets/julia_nor.png";
import youtube from "../../assets/youtube-3.svg";

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 41px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const BlockList = styled.div`
  display: flex;
  @media (max-width: 1040px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const UserCard = styled.div`
  display: flex;
  gap: 23px;

  img {
    height: 285px;
    display: block;
    border-radius: 8px;
    background: #3f4052;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Text = styled.div`
  h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  p {
    max-width: 261px;
    font-size: 18px;
    line-height: 1.47;
    @media (max-width: 500px) {
      max-width: none;
    }
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
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const AboutBlock: FC = observer(() => {
  return (
    <Container id="about">
      <Title>О нас</Title>
      <BlockList>
        <UserCard>
          <img alt="Лилия Нор" src={lilia} />
          <Text>
            <h1>Лилия Нор</h1>
            <p>Spiritual Guide, парапсихолог, трансформационный коуч, биоэнерготерапевт, невербальный гипнолог. Участник телепроектов. Практикующий личный консультант более 21 года.</p>
            <p>
              <a href="https://youtube.com/@LiliaNor" target="_blank" rel="noreferrer">
                <img src={youtube} alt="yt" />
                YouTube
              </a>
            </p>
          </Text>
        </UserCard>
        <UserCard>
          <img alt="Юлия Нор" src={julia} />
          <Text>
            <h1>Юлия Нор</h1>
            <p>Spiritual Guide, парапсихолог, биоэнерготерапевт, системный расстановщик, причинно-следственный корректор, астронумеролог, гипнолог. Практикующий личный консультант более 17 лет.</p>
          </Text>
        </UserCard>
      </BlockList>
    </Container>
  );
});

export default AboutBlock;
