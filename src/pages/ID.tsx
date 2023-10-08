import { FC } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import { Layout } from "../layouts";
import { IDHeader } from "../widgets";

const ID: FC<PageProps> = observer(({ title }) => {
  return <Layout title={title}>
    <IDHeader />
  </Layout>;
});

export default ID;
