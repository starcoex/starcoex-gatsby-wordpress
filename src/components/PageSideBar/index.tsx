import React from "react";
import PageIcon from "../../images/page-icon.svg";
import { Menu, Wrapper } from "../../styles/PageSideBar.style";
import SidebarMessage from "../SidebarMessage";
import { Link } from "gatsby";

interface IPageSideBarProps {
  children: any;
  parentChildren: any;
  currentPage: any;
  parent: any;
}

export default function PageSideBar({ children, parentChildren, parent, currentPage }: IPageSideBarProps) {
  function getParentContent() {
    return (
      <>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="CakeIt Page" />
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }}></span>
        </li>
        {children?.nodes?.map((child: { id: React.Key | null | undefined; uri: string; title: any }) => (
          <li key={child.id}>
            <Link to={child.uri}>
              <span dangerouslySetInnerHTML={{ __html: child?.title }}></span>
            </Link>
          </li>
        ))}
      </>
    );
  }

  function getChildContent() {
    return (
      <>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="CakeIt Page" />
          <span dangerouslySetInnerHTML={{ __html: parent }} />
        </li>
        {parentChildren.map((child: { id: React.Key | null | undefined; uri: string; title: any }) => (
          <li key={child.id}>
            <Link to={child.uri} activeClassName="sidebar-highlighted">
              <span dangerouslySetInnerHTML={{ __html: child.title }} />
            </Link>
          </li>
        ))}
      </>
    );
  }
  return (
    <Wrapper>
      {children?.nodes?.length === 0 && !parent ? (
        <SidebarMessage />
      ) : (
        <Menu>{parent ? getChildContent() : getParentContent()}</Menu>
      )}
    </Wrapper>
  );
}
