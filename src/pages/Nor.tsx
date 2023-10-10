import { FC } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import { Layout } from "../layouts";
import { NorBottomText, NorHeader, NorProgram, NorVorteile } from "../widgets";

const Nor: FC<PageProps> = observer(({ title }) => {
  return <Layout title={title} gap={40}>
    <NorHeader />
    <NorVorteile />
    <NorProgram />
    <NorBottomText />
  </Layout>;
});

export default Nor;
