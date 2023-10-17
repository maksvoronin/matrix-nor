import { FC, PropsWithChildren } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import styled from "styled-components";
import { Footer, Header, Popup } from "../widgets";

const LayoutContainer = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ gap }) => gap}px;
`;

const Layout: FC<PropsWithChildren<PageProps>> = observer(({ title, children, gap }) => {
  return (
    <>
      <title>{title}</title>
      <Popup />
      <LayoutContainer gap={gap || 80}>
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </>
  );
});

export default Layout;
