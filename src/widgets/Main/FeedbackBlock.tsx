import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import galka from "../../assets/galka.png";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  color: #fff;
  font-weight: 400;
  margin-top: 0;
  padding: 0;
`;

const FeedbackList = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 23px;
`;

const FeedbackContainer = styled.div`
  background: #de5cff;
  padding: 30px;
  border-radius: 20px;
`;

const FeedbackTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 17px;
`;

const FeedbackText = styled.p`
  line-height: 147%;
  font-size: 24px;
  color: #fff;
`;

const FeedbackBlock: FC = observer(() => {
  return (
    <Container>
      <Title>
        <img src={galka} alt="Title arrow" />
        Modern professional, helping yourself and others
      </Title>
      <Subtitle>Отзывы</Subtitle>
      <FeedbackList>
        <FeedbackContainer>
          <FeedbackTitle>Татьяна</FeedbackTitle>
          <FeedbackText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis tincidunt ipsum, nec faucibus magna interdum et.</FeedbackText>
        </FeedbackContainer>
        <FeedbackContainer>
          <FeedbackTitle>Татьяна</FeedbackTitle>
          <FeedbackText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis tincidunt ipsum, nec faucibus magna interdum et.</FeedbackText>
        </FeedbackContainer>
      </FeedbackList>
    </Container>
  );
});

export default FeedbackBlock;
