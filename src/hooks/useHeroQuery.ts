import { graphql, useStaticQuery } from "gatsby";

export const useHeroQuery = () => {
  const data = useStaticQuery<Queries.HeroQuery>(graphql`
    query Hero {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
          }
          heroText
        }
        id
      }
    }
  `);
  return data;
};
