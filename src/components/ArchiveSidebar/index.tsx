import React from "react";
import PageIcon from "../../images/page-icon.svg";
import { Menu, Wrapper } from "../../styles/ArchiveSidebar.styles";
import { TypeWpCategory } from "../../../gatsby-node";
import { Link } from "gatsby";

interface IArchiveSidebarProps {
  catId: string;
  categories: {
    edges: {
      node: TypeWpCategory;
    }[];
  };
  // categories: any;
}

export default function ArchiveSidebar({ catId, categories }: IArchiveSidebarProps) {
  const { edges } = categories;
  const sortedCategories = [...edges].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1;
    if (x.node.slug === "all-posts") return 1;
    return 0;
  });
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Cake It! - Archive Header" />
          <span>Posts</span>
        </li>
        {sortedCategories.map((cat) => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== "uncategorized" ? (
              <li key={cat.node.id}>
                <span className="count">{cat.node.count}</span>
                <Link to={cat.node.uri} activeClassName="sidebar-highlighted">
                  <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
                </Link>
              </li>
            ) : null;
          }
        })}
      </Menu>
    </Wrapper>
  );
}
