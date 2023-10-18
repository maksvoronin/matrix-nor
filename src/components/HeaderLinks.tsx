import { observer } from "mobx-react";
import { FC } from "react";
import styled from "styled-components";
import { Link as DefaultLink } from "../shared";

const HeaderLinksContainer = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  @media(max-width: 500px) {
    gap: 5px;
  }
`;

const Link = styled(DefaultLink)`
  color: white;
  &:hover {
    text-decoration: underline;
  }
  @media(max-width: 500px) {
    font-size: 13px;
  }
  &.nor {
    color: #DC4EFF;
  }
  &.id {
    color: #28DFFF;
  }
  &.sg {
    color: #E72408;
  }
`;

const HeaderLinks: FC = observer(() => {
  return (
    <HeaderLinksContainer>
      <Link to="/">Главная</Link>
      <Link to="/nor" className="nor">MatrixNor</Link>
      <Link to="/id" className="id">Matrix ID</Link>
      <Link to="/sg" className="sg">Matrix SG</Link>
    </HeaderLinksContainer>
  );
});

export default HeaderLinks;
