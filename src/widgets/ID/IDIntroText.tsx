import { observer } from "mobx-react";
import { FC } from "react";
import { Container } from "../../shared";
import styled from "styled-components";

const Text = styled.p`
  font-size: 24px;
`;

const IDHeader: FC = observer(() => {
  return (
    <Container style={{ gap: 16, display: "flex", flexDirection: "column" }}>
      <Text>
        Нумерология древняя система, но изначально цифры использовались не для количественного выражения чего либо, а как знаки описывающие вибрационные структуры бытия. Цифра, единственный «язык» на
        котором разговаривает и мыслит вся планета
      </Text>
      <Text>17 лет практики работы с людьми позволили открыть собственную систему прочтения многим известной Матрицы Пифагора и цифр в целом. </Text>
      <Text>
        Мы используем цифры для описания человека, определения энерготипа и его способностей. Диагностики и выявления первопричины его проблем, формирования взаимоотношений и изменения реакций на
        самого человека.
      </Text>
    </Container>
  );
});

export default IDHeader;
