import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Link as DefaultLink } from "../shared";

const HeaderLinksContainer = styled.div`
  display: flex;
  gap: 10px;
  color: white;
`;

const Link = styled(DefaultLink)`
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderLinks: FC = observer(() => {
  return (
    <HeaderLinksContainer>
      <Link to="/">Главная</Link>
      <Link to="/nor">MatrixNor</Link>
      <Link to="/id">Matrix ID</Link>
      <Link to="/sg">Matrix SG</Link>
    </HeaderLinksContainer>
  );
});

export default HeaderLinks;
