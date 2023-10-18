import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Container } from "../shared";

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  padding-bottom: 50px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1025px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: calc(100% - 30px);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Address = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Footer: FC = observer(() => {
  return (
    <footer>
      <FooterContainer>
        <Links>
          <p>t.me/mv_voronini</p>
          <p>t.me/mv_voronini</p>
          <p>t.me/mv_voronini</p>
        </Links>
        <Address>
          <p>+7 999 999 99 99</p>
          <p>ул. Пушкин, г. Александр</p>
          <p>ул. Пушкин, г. Александр</p>
        </Address>
      </FooterContainer>
    </footer>
  );
});

export default Footer;
