import { observer } from "mobx-react";
import { FC } from "react";
import { PageProps } from "../types";
import { Layout } from "../layouts";
import { FirstScreen } from "../widgets";

const Landing: FC<PageProps> = observer(({ title }) => {
  return <Layout title={title}>
    <FirstScreen />
  </Layout>;
});

export default Landing;
