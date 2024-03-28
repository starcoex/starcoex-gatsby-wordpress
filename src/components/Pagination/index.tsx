import React from "react";
import { Wrapper } from "../../styles/Pagination.style";
import { Link } from "gatsby";

interface IPaginationProps {
  page: number;
  totalPages: number;
  catUri: string;
}

export default function Pagination({ page, totalPages, catUri }: IPaginationProps) {
  return (
    <>
      <h2>
        Navigation - Page {page} / {totalPages}
      </h2>
      <Wrapper isFirst={page === 1}>
        {page > 1 ? (
          <Link to={`${catUri}${page === 2 ? "" : page - 1}`} className="back">
            Previous
          </Link>
        ) : null}
        {page < totalPages ? (
          <Link to={`${catUri}${page + 1}`} className="forward">
            Next
          </Link>
        ) : null}
      </Wrapper>
    </>
  );
}
