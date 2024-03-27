import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      Index
      <p>Hello</p>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
