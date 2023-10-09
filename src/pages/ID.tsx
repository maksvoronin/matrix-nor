import { FC } from "react";
import { PageProps } from "../types";
import { observer } from "mobx-react";
import { Layout } from "../layouts";
import { IDCalculator, IDHeader, IDIntroText, IDProgram, IDQuestions, IDWhoUse } from "../widgets";

const ID: FC<PageProps> = observer(({ title }) => {
  return (
    <Layout title={title} gap={25}>
      <IDHeader />
      <IDIntroText />
      <IDProgram />
      <IDWhoUse />
      <IDQuestions />
      <IDCalculator />
    </Layout>
  );
});

export default ID;
