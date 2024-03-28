import React, { ContextType } from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import BreadCrumb from "../components/BreadCrumb";
import { ContentWrapper, PageContent, Wrapper, StyledH2, StyledDate, StyledReadMore } from "../styles/Archive.styles";
import ArchiveSidebar from "../components/ArchiveSidebar";
import { TypeWpCategory } from "../../gatsby-node";
import Pagination from "../components/Pagination";

interface IArchiveTemplateProps {
  data: Queries.WpPagePostQuery;
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
    catId: string;
    catName: string;
    catUri: string;
    categories: {
      edges: {
        node: TypeWpCategory;
      }[];
    };
  };
}

export default function archiveTemplate({ data, pageContext }: IArchiveTemplateProps) {
  const { catId, catName, catUri, currentPage, categories } = pageContext;
  const { allWpPost } = data;

  return (
    <Layout>
      <StaticImage
        src="../images/archive_headerimage.png"
        placeholder="tracedSVG"
        width={1920}
        height={300}
        alt="Archive Image"
      />
      <Wrapper>
        <BreadCrumb parent={{ uri: "/blog/all-posts", title: "blog" }} />
        <ContentWrapper>
          <ArchiveSidebar catId={catId} categories={categories} />
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: catName }} />
            {allWpPost.edges.map((post) => (
              <article key={post.node.id} className="entry-content">
                <Link to={`/blog${post.node.uri}`}>
                  <StyledH2 dangerouslySetInnerHTML={{ __html: post.node.title! }} />
                </Link>
                <StyledDate dangerouslySetInnerHTML={{ __html: post.node.date! }} />
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt! }} />
                <StyledReadMore to={`/blog${post.node.uri}`}>Read More</StyledReadMore>
                <div className="dot-divider" />
              </article>
            ))}
            <Pagination page={pageContext.currentPage} totalPages={pageContext.numPages} catUri={catUri} />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query WpPagePost($skip: Int = 10, $limit: Int = 10, $catId: String) {
    allWpPost(skip: $skip, limit: $limit, filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date
        }
      }
    }
  }
`;
