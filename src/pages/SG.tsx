import { FC } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import { Layout } from "../layouts";
import { SGHeader } from "../widgets";

const SG: FC<PageProps> = observer(({ title }) => {
  return (
    <Layout title={title}>
      <SGHeader />
    </Layout>
  );
});

export default SG;
