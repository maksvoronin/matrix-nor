import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";

const MatrixTitle = styled.h1`
  text-align: right;
  font-size: 64px;
  color: #28DFFF;
  font-weight: 400;
  @media(max-width: 400px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  margin-top: 19px;
  @media(max-width: 400px) {
    font-size: 18px;
  }
`;

const IDHeader: FC = observer(() => {
  return (
    <Container style={{ marginTop: 120 }}>
      <MatrixTitle>Matrix ID</MatrixTitle>
      <Subtitle>Идентификация личности по дате рождения.</Subtitle>
    </Container>
  );
});

export default IDHeader;
