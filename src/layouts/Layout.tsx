import { FC, PropsWithChildren } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import styled from "styled-components";
import { Footer, Header } from "../widgets";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 80px;
`;

const Layout: FC<PropsWithChildren<PageProps>> = observer(({ title, children }) => {
  return (
    <>
      <title>{title}</title>
      <LayoutContainer>
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </>
  );
});

export default Layout;
