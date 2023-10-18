import { observer } from "mobx-react";
import { FC } from "react";
import { Button, Container } from "../../shared";
import { styled } from "styled-components";
import { usePopupStoreContext } from "../../store";
import { BackcallPopup } from "../../popups";

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
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  max-width: 712px;
  line-height: 1.47;
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const WelcomeScreen: FC = observer(() => {
  const { setContent, setTitle, setVisible } = usePopupStoreContext();

  const openpopup = () => {
    setTitle("Оставить заявку");
    setVisible(true);
    setContent(<BackcallPopup />);
  };

  return (
    <WelcomeContainer id="welcome">
      <Title>Рады приветствовать Вас на нашем сайте.</Title>
      <Text>
        Мы Лилия и Юлия Нор, создатели уникальной системы раскрытия потенциала и трансформации личности MATRIXNOR.
        <br />
        Мы и наша команда проводим online и offline обучение для людей из разных стран. Ученики открыли представительства школы в Германии, Франции, России, США и Италии.
      </Text>
      <Button width={270} height={62} onClick={openpopup}>
        Записаться
      </Button>
    </WelcomeContainer>
  );
});

export default WelcomeScreen;
