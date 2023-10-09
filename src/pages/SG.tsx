import { FC } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import { Layout } from "../layouts";
import { SGHeader, SGText } from "../widgets";

const SG: FC<PageProps> = observer(({ title }) => {
  return (
    <Layout title={title} gap={25}>
      <SGHeader />
      <SGText />
    </Layout>
  );
});

export default SG;
