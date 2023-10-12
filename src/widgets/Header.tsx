import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Link } from "../shared";
import { HeaderLinks } from "../components";
import config from "../config";

const HeaderContainer = styled.header<{ scrolled: string | undefined }>`
  position: fixed;
  top: 0;
  width: calc(100%);
  height: 70px;
  transition: background 0.2s;
  background: ${({ scrolled }) => (scrolled ? "#070933" : "transparent")};
`;

const TelegramLink = styled(Link)``;

const HeaderLayout = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media(max-width: 1040px) {
    ${TelegramLink} {
      display: none;
    }
  }
`;

const Logo = styled.b`
  color: var(--purple);
  @media(max-width: 500px) {
    font-size: 14px;
  }
`;

const Header: FC = observer(() => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrollTop > 0 ? "true" : undefined}>
      <HeaderLayout>
        <Logo>MATRIX NOR</Logo>
        <HeaderLinks />
        <TelegramLink to={config.telegram_link} target="_blank">
          {config.telegram_name}
        </TelegramLink>
      </HeaderLayout>
    </HeaderContainer>
  );
});

export default Header;
