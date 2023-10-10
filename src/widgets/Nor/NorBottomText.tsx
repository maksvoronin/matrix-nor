import { observer } from "mobx-react";
import styled from "styled-components";
import { Container as DefContainer } from "../../shared";

const Text = styled.p`
  font-size: 24px;
  line-height: 1.47;
`;

const Container = styled(DefContainer)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const NorBottomText = observer(() => {
  return (
    <Container>
      <Text>Многие из наших учеников изменили собственную жизнь, восприятие мира, получили универсальный метод для работы с клиентами.</Text>
      <Text>Мы даём ключи для работы с собственным Я, к изменению реальности и переходу на новый уровень.</Text>
      <Text>
        Метод подходит для всех! Не имеет противопоказаний.
        <br />
        *Восстановление энергетического поля, помогает более правильному функционированию физического тела, но не является напрямую целительством.
      </Text>
    </Container>
  );
});

export default NorBottomText;
