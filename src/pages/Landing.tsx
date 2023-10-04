import { observer } from "mobx-react";
import { FC } from "react";
import { PageProps } from "../types";
import { Layout } from "../layouts";
import { AboutBlock, FirstScreen, WelcomeScreen } from "../widgets";

const Landing: FC<PageProps> = observer(({ title }) => {
  return <Layout title={title}>
    <FirstScreen />
    <WelcomeScreen />
    <AboutBlock />
  </Layout>;
});

export default Landing;
