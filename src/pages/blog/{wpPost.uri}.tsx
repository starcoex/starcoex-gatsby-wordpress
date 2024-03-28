import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import BreadCrumb from "../../components/BreadCrumb";
import { graphql, PageProps } from "gatsby";
import PostSidebar from "../../components/PostSidebar";

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const PostContent = styled.article`
  margin-top: 20px;
`;

export default function PostTemplate({ data }: PageProps<Queries.PostDataQuery>) {
  const { wpPost } = data;
  return (
    <Layout>
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/blog/all-posts",
            title: "blog",
          }}
        />
        <ContentWrapper>
          <PostSidebar date={wpPost?.date!} author={wpPost?.author?.node?.name!} categories={wpPost?.categories} />
          <PostContent>
            <h1 dangerouslySetInnerHTML={{ __html: wpPost?.title! }} />
            <div dangerouslySetInnerHTML={{ __html: wpPost?.content! }} />
          </PostContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query PostData($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`;
