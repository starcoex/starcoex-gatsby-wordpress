import { graphql, useStaticQuery } from "gatsby";

export const useQuoteQuery = () => {
  const data = useStaticQuery<Queries.QuoteQuery>(graphql`
    query Quote {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          citat1Author
          citat1Text
        }
      }
    }
  `);
  return data;
};
