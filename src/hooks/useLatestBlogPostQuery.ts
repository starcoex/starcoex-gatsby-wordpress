import { graphql, useStaticQuery } from "gatsby";

export const useLatestBlogPostQuery = () => {
  const data = useStaticQuery<Queries.LatestBlogDataQuery>(graphql`
    query LatestBlogData {
      allWpPost(sort: { date: DESC }) {
        edges {
          node {
            excerpt
            uri
            slug
            title
          }
        }
      }
    }
  `);
  return data;
};
