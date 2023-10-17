import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Container } from "../../shared";

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  margin-bottom: 41px;
  text-align: center;
  @media(max-width: 500px) {
    font-size: 24px;
  }
`;

const BlockList = styled.div`
  display: flex;
  @media(max-width: 1040px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const UserCard = styled.div`
  display: flex;
  gap: 23px;

  img {
    width: 220px;
    height: 285px;
    display: block;
    background-color: #d9d9d9;
    border-radius: 8px;
  }

  @media(max-width: 500px) {
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
    @media(max-width: 500px) {
      max-width: none;
    }
  }
  @media(max-width: 500px) {
      text-align: center;
    }
`;

const AboutBlock: FC = observer(() => {
  return (
    <Container id="about">
      <Title>О нас</Title>
      <BlockList>
        <UserCard>
          <img alt="some" />
          <Text>
            <h1>Лилия Нор</h1>
            <p>Spiritual Guide, парапсихолог, трансформационный коуч, биоэнерготерапевт, участник телепроектов. Практикующий личный консультант более 21 года.</p>
          </Text>
        </UserCard>
        <UserCard>
          <img alt="some" />
          <Text>
            <h1>Юлия Нор</h1>
            <p>Spiritual Guide, парапсихолог, биоэнерготерапевт, системный растановщик, причинно-следственный корректор, астронумеролог, гипнолог. Практикующий личный консультант более 17 лет.</p>
          </Text>
        </UserCard>
      </BlockList>
    </Container>
  );
});

export default AboutBlock;
