import { FC } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import { Layout } from "../layouts";
import { NorHeader } from "../widgets";

const Nor: FC<PageProps> = observer(({ title }) => {
  return <Layout title={title}>
    <NorHeader />
  </Layout>;
});

export default Nor;