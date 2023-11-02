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
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h2`
  font-size: 32px;
  color: #fff;
  font-weight: 400;
  margin-top: 0;
  padding: 0;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const FeedbackList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 23px;
  @media (max-width: 670px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;

const FeedbackContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
`;

const FeedbackTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #cf2ca6;
  margin-bottom: 17px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const FeedbackText = styled.p`
  line-height: 147%;
  font-size: 20px;
  color: #070933;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const FeedbackBlock: FC = observer(() => {
  return (
    <Container id="feedback">
      <Title>
        <img src={galka} alt="Title arrow" />
        Modern professional, helping yourself and others
      </Title>
      <Subtitle>Отзывы</Subtitle>
      <FeedbackList>
        <FeedbackContainer>
          <FeedbackTitle>Vladimir D.</FeedbackTitle>
          <FeedbackText>
            Лилия , Большое вам спасибо за консультацию. Консультация прошла лучше, чем я ожидал. Вы рассказали мне такие Подробности о моей жизни ,о них никто никогда не знал. Вы очень Удивительный и
            замечательный человек. Я очень благодарен моей подруге что она настояла чтобы я обратился к вам. Огромное спасибо за КОНСУЛЬТАЦИЮ ЗА ВАШИ советы. все что вы порекомендовали помогло.
            СПАСИБО, С УВАЖЕНИЕМ!!!
          </FeedbackText>
        </FeedbackContainer>
        <FeedbackContainer>
          <FeedbackTitle>Irina S.</FeedbackTitle>
          <FeedbackText>
            Дорогая Лилия, вы знаете вы перевернули мою жизнь.🌏 Побыть у вас на медитации, это как посмотреть самому себе в лицо. После медитации я поняла где у меня проблемы и над чем мене надо
            работать. Спасибо вам большое что вы открыли мне глаза, после этого полностью изменилась моя жизнь, я проработала все проблемы. И начала все с нового листа. А система МАТРИКС, стала моей
            новой профессией. С уважением, Ирина С.
          </FeedbackText>
        </FeedbackContainer>
        <FeedbackContainer>
          <FeedbackTitle>GROSMANN SVETLANA</FeedbackTitle>
          <FeedbackText>
            Дорогая Лилия!От всей души благодарю тебя за те зания которые получила и получаю,за твою мудрость,оптимизм,честность и открытость,ты Умница,можешь вокруг себя собрать огромное количество
            людей,матрикс твой делает чудеса,переворачивает всё в ЖИЗНИ, я лично знаю огромное количество людей которым смогли помочь,я рада что с Вами знакома, и всю свою семью привела.Пусть всегда
            будет у Вас только солнышко и низкий Вам поклон за ваш труд!🕊
          </FeedbackText>
        </FeedbackContainer>
        <FeedbackContainer>
          <FeedbackTitle>Татьяна Швабауэр</FeedbackTitle>
          <FeedbackText>
            Дорогая Юлия, благодарю тебя от всей души за те знания которые, я от тебя получила, ты очень интересный человек, и от тебя можно многому научиться, ты классная, хотелось бы чтобы у меня по
            жизни всегда были такие компетентные люди как ты. С самыми наилучшими пожеланиями. 🌹
          </FeedbackText>
        </FeedbackContainer>
        <FeedbackContainer>
          <FeedbackTitle>Анастасия З. 37 лет, Москва</FeedbackTitle>
          <FeedbackText>
            Для меня каждый вебинар, как открытие Вселенной! Всегда много новой и интересной информации. Сразу хочется применять эти знания в жизни. Удивляешься насколько точно работает нумерология и
            энергия. Радуешься, когда понимаешь лучше родных и близких. Это безграничные возможности в жизненных ситуациях. Огромная благодарность, за то, что делитесь с нами своими знаниями! С вами
            Мир стал ярче и понятней!!! ❤️
          </FeedbackText>
        </FeedbackContainer>
        <FeedbackContainer>
          <FeedbackTitle>Алена D. 46 лет, Дубай</FeedbackTitle>
          <FeedbackText>
            Я иногда думаю, сколько ошибок я могла бы совершить, не будь в моей жизни Юли и мне становится не по себе. Я всегда знаю, что есть в этом мире человек, который всегда на стороне моих
            лучших интересов, на стороне моей жизни. Который честно укажет на ошибку, который остановит в шаге от пропасти, который покажет куда надо идти, чтобы было счастливо… Благодарность моя
            огромна, дай Бог тебе счастья и благополучия, мой мудрый добрый друг ❤️🙏
          </FeedbackText>
        </FeedbackContainer>
      </FeedbackList>
    </Container>
  );
});

export default FeedbackBlock;
