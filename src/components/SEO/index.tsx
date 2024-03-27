import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string;
}

export default function SEO({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site(siteMetadata: {}) {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
