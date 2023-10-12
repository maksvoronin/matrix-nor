import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";

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
    <ContactContainer>
      <Title>Контакты</Title>
      <ContactRow>
        <ContactColumn>
          <p>ул. Пушкин, г. Александр</p>
          <p>ул. Пушкин, г. Александр</p>
          <p>ул. Пушкин, г. Александр</p>
        </ContactColumn>
        <ContactColumn>
          <p>ул. Пушкин, г. Александр</p>
          <p>ул. Пушкин, г. Александр</p>
          <p>ул. Пушкин, г. Александр</p>
        </ContactColumn>
      </ContactRow>
    </ContactContainer>
  );
});

export default ContactBlock;
