import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import { getImage } from "gatsby-plugin-image";
import BreadCrumb from "../components/BreadCrumb";
import PageSideBar from "../components/PageSideBar";

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

const PageContent = styled.article`
  margin-top: 20px;
`;

interface IPageTemplateProps {
  data: Queries.PageDataQuery;
}

export default function PageTemplate({ data }: IPageTemplateProps) {
  const imageDate = getImage(data.wpPage?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData!);
  return (
    <Layout>
      {data.wpPage?.featuredImage ? <PageHero image={imageDate} /> : null}
      <Wrapper>
        <BreadCrumb parent={data.wpPage?.wpParent && data.wpPage?.wpParent?.node} />
        <ContentWrapper>
          <PageSideBar
            parentChildren={data.wpPage?.wpParent && data.wpPage?.wpParent?.node?.wpChildren?.nodes!}
            currentPage={data.wpPage}
            parent={data.wpPage?.wpParent && data.wpPage?.wpParent?.node?.title}
          >
            {data.wpPage?.wpChildren}
          </PageSideBar>
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: data.wpPage?.title! }} />
            <div dangerouslySetInnerHTML={{ __html: data.wpPage?.content! }} />
          </PageContent>
        </ContentWrapper>

        <p>Content</p>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query PageData($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;
