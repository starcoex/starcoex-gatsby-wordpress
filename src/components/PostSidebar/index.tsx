import React from "react";
import { Menu, Wrapper } from "../../styles/PostSidebar.style";
import { Link } from "gatsby";

interface IPostSidebarProps {
  date: string;
  author: string;
  categories:
    | {
        readonly nodes:
          | readonly ({
              readonly id: string;
              readonly name: string | null;
              readonly uri: string;
              readonly slug: string | null;
            } | null)[]
          | null;
      }
    | null
    | undefined;
}

export default function PostSidebar({ date, author, categories }: IPostSidebarProps) {
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-section">
          <span>{date}</span>
        </li>
        <li className="sidebar-section">
          <span>{author}</span>
        </li>
        <li className="sidebar-section">
          <span>Categories</span>
        </li>
        {categories?.nodes?.map((cat) =>
          cat?.slug !== "all-posts" ? (
            <li key={cat?.id}>
              <Link to={cat?.uri!}>
                <span dangerouslySetInnerHTML={{ __html: cat?.name! }} />
              </Link>
            </li>
          ) : null
        )}
      </Menu>
    </Wrapper>
  );
}
