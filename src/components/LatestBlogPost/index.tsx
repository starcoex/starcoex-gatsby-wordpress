import React from "react";
import { useLatestBlogPostQuery } from "../../hooks/useLatestBlogPostQuery";
import { Link } from "gatsby";
import { data } from "autoprefixer";
import { Wrapper } from "../../styles/LatestBlogPost.styles";

export default function LatestBlogPost() {
  const { allWpPost } = useLatestBlogPostQuery();
  return (
    <Wrapper>
      <h1>Latest Blog Post</h1>
      <h4>{allWpPost.edges[0].node.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: allWpPost.edges[0].node.excerpt! }} />
      <Link to={`/blog${allWpPost.edges[0].node.uri}`}>
        <h5>Read More</h5>
      </Link>
    </Wrapper>
  );
}
