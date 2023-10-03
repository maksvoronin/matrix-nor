import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Container, Link } from "../shared";
import { HeaderLinks } from "../components";
import config from "../config";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(0, 0, 0, 0.2);
  ${Container} {
    height: 100%;
  }
`;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Header: FC = observer(() => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderLayout>
          <p>Logotype</p>
          <HeaderLinks />
          <Link to={config.telegram_link} target="_blank">{config.telegram_name}</Link>
        </HeaderLayout>
      </Container>
    </HeaderContainer>
  );
});

export default Header;
