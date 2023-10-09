import styled from "styled-components";
import { Container } from "../../shared";
import { FC } from "react";
import { observer } from "mobx-react";
import galka from "../../assets/galka.png";

const Title = styled.p`
  font-size: 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 33px;
    height: 38px;
  }
`;

const Text = styled.p`
  font-size: 24px;
  line-height: 1.47;
`;

const IDQuestions: FC = observer(() => {
  return (
    <Container>
      <Title>
        <img src={galka} alt="galo4ka" />В каких вопросах MATRIX ID помогает найти первопричину и решить ситуацию:
      </Title>
      <Text>
        Самое первое, это описание самого человека, его возможностей и способностей. Проблемы в отношениях, семья, дети-родители, коллеги. Конфликты, отсутствие взаимонимания.
        <br />
        Выстраивание отношений в паре, определение потенциала на будущее. Выбор направления деятельности и самореализации, подбор профессии. Финансовые проблемы, негативные программы и установки.
      </Text>
    </Container>
  );
});

export default IDQuestions;
