import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ContentArea from "../components/ContentArea";
import LatestBlogPost from "../components/LatestBlogPost";
import Quote from "../components/Quote";
import About from "../components/About";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ContentArea />
      <LatestBlogPost />
      <Quote />
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
