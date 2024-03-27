import { graphql, useStaticQuery } from "gatsby";

export const useContentQuery = () => {
  const data = useStaticQuery<Queries.ContentDataQuery>(graphql`
    fragment WpMediaItemFragment on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
    query ContentData {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            ...WpMediaItemFragment
          }
          cta2Image {
            ...WpMediaItemFragment
          }
          cta3Image {
            ...WpMediaItemFragment
          }
        }
      }
    }
  `);
  return data;
};
