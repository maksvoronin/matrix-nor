import { FC } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import { Layout } from "../layouts";

const Nor: FC<PageProps> = observer(({ title }) => {
  return <Layout title={title}></Layout>;
});

export default Nor;
