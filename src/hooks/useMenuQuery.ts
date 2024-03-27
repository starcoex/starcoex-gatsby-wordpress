import { graphql, useStaticQuery } from "gatsby";

const useMenuQuery = () => {
  const data = useStaticQuery<Queries.HeaderQuery>(graphql`
    query Header {
      site(siteMetadata: {}) {
        siteMetadata {
          siteUrl
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            id
            url
            parentId
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

export default useMenuQuery;
