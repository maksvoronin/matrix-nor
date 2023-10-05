import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import logo from "../assets/company-logo.png";
import { Container } from "../shared";

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding-bottom: 50px;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 204px;
    height: 40px;
    margin-bottom: 8px;
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
`;

const Footer: FC = observer(() => {
  return (
    <footer>
      <FooterContainer>
        <CompanyInfo>
          <img src={logo} alt="Company logo" />
          <p>Name, description</p>
        </CompanyInfo>
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
