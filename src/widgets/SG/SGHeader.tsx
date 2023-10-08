import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";

const MatrixTitle = styled.h1`
  text-align: right;
  font-size: 64px;
  color: #E72408;
  font-weight: 400;
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: right;
  margin-top: 19px;
  margin-bottom: 19px;
`;

const SGHeader: FC = observer(() => {
  return (
    <Container style={{ marginTop: 120 }}>
      <MatrixTitle>Matrix SG</MatrixTitle>
      <Subtitle>Spiritual Guide работа с энерго информационными каналами.</Subtitle>
    </Container>
  );
});

export default SGHeader;
