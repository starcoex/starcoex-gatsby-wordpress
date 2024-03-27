import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
