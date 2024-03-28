import React from "react";
import { Wrapper } from "../../styles/BreadCrumb.style";
import { Link } from "gatsby";

interface IBreadCrumbProps {
  parent: { uri: string; title: string };
}

export default function BreadCrumb({ parent }: IBreadCrumbProps) {
  return (
    <Wrapper>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span className="divider">/</span>
      {parent ? (
        <>
          <Link to={parent.uri}>
            <span dangerouslySetInnerHTML={{ __html: parent.title }} />
          </Link>
          <span> /</span>
        </>
      ) : null}
    </Wrapper>
  );
}
