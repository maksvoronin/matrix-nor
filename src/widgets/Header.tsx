import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Link } from "../shared";
import { HeaderLinks } from "../components";
import config from "../config";

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  transition: background 0.2s;
  background: ${({ scrolled }) => (scrolled ? "#361e14" : "transparent")};
  ${Container} {
    height: 100%;
  }
`;

const HeaderLayout = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled.b`
  color: var(--purple);
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
    <HeaderContainer scrolled={scrollTop > 0}>
      <HeaderLayout>
        <Logo>MATRIX NOR</Logo>
        <HeaderLinks />
        <Link to={config.telegram_link} target="_blank">
          {config.telegram_name}
        </Link>
      </HeaderLayout>
    </HeaderContainer>
  );
});

export default Header;
