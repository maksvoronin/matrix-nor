import { observer } from "mobx-react";
import { FC } from "react";
import { PageProps } from "../types";
import { Layout } from "../layouts";
import { AboutBlock, CertificateBlock, ContactBlock, DecanatBlock, FeedbackBlock, FirstScreen, StarBlock, WelcomeScreen } from "../widgets";

const Landing: FC<PageProps> = observer(({ title }) => {
  return (
    <Layout title={title}>
      <FirstScreen />
      <WelcomeScreen />
      <AboutBlock />
      <CertificateBlock />
      <StarBlock />
      <FeedbackBlock />
      <DecanatBlock />
      <ContactBlock />
    </Layout>
  );
});

export default Landing;
