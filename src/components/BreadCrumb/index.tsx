import React from "react";
import { Wrapper } from "../../styles/BreadCrumb.style";
import { Link } from "gatsby";

interface IBreadCrumbProps {
  parent: any;
}

export default function BreadCrumb({ parent }: IBreadCrumbProps) {
  console.log(parent);
  return (
    <Wrapper>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span className="divider">/</span>
      {parent ? (
        <>
          <Link to={parent.uri}>
            <span dangerouslySetInnerHTML={{ __html: parent.title! }} />
          </Link>
          <span>/</span>
        </>
      ) : null}
      <p>BreadCrumb</p>
    </Wrapper>
  );
}
