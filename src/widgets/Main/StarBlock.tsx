import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";
import galka from "../../assets/galka.png";
import star from "../../assets/star.png";

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 36px;
`;

const Star = styled.img`
  max-width: 100%;
`;

const StarBlock: FC = observer(() => {
  return (
    <Container>
      <Title>
        <img src={galka} alt="Title arrow" />
        Проработать собственные вопросы
      </Title>
      <Star src={star} alt="Star" />
    </Container>
  );
});

export default StarBlock;
