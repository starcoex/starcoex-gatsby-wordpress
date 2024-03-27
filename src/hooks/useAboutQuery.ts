import { graphql, useStaticQuery } from "gatsby";

export const useAboutQuery = () => {
  const data = useStaticQuery<Queries.AboutQuery>(graphql`
    query About {
      wpPage(databaseId: { eq: 47 }) {
        content
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `);
  return data;
};
