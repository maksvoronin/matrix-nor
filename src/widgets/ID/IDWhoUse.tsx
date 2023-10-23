import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";
import galka from "../../assets/galka.png";

const Title = styled.p`
  font-size: 24px;
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    width: 33px;
    height: 38px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Ul = styled.ul`
  li {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.47;
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const IDWhoUse: FC = observer(() => {
  return (
    <Container>
      <Title>
        <img src={galka} alt="galo4ka" />
        Кто использует нашу систему:
      </Title>
      <Ul>
        <li>Психологи</li>
        <li>Эзотерики, экстрасенсы, практики систем личностного роста</li>
        <li>Специалисты по подбору персонала</li>
        <li>Руководители компаний</li>
        <li>Люди занимающиеся собственным саморазвитием</li>
      </Ul>
    </Container>
  );
});

export default IDWhoUse;
