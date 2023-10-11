import { observer } from "mobx-react";
import { FC } from "react";
import { Button, Container } from "../../shared";
import { styled } from "styled-components";

const WelcomeContainer = styled(Container)`
  width: calc(100% - 30px);
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
`;

const Text = styled.p`
  max-width: 712px;
  line-height: 1.47;
  font-size: 18px;
`;

const WelcomeScreen: FC = observer(() => {
  return (
    <WelcomeContainer>
      <Title>Рады приветствовать Вас на нашем сайте.</Title>
      <Text>
        Мы Лилия и Юлия Нор, создатели уникальной системы раскрытия потенциала и трансформации личности MATRIXNOR.
        <br />
        Последние 3 года мы и наша команда проводим online и offline обучение для людей из разных стран. Ученики открыли представительства школы в Германии, Франции, России, США и Италии.
      </Text>
      <Button width={270} height={62}>Записаться</Button>
    </WelcomeContainer>
  );
});

export default WelcomeScreen;
