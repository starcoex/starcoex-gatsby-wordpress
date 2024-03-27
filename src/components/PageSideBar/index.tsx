import React from "react";
import PageIcon from "../../images/page-icon.svg";
import { Menu, Wrapper } from "../../styles/PageSideBar.style";
import SidebarMessage from "../SidebarMessage";

interface IPageSideBarProps {
  children:
    | {
        readonly nodes:
          | readonly (
              | {}
              | {
                  readonly id: string;
                  readonly uri: string;
                  readonly title: string | null;
                }
              | null
            )[]
          | null;
      }
    | null
    | undefined;

  parentChildren: any;
  currentPage: any;
  parent: any;
}

export default function PageSideBar({ children, parentChildren }: IPageSideBarProps) {
  function getParentContent() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }

  return <Wrapper>{children?.nodes?.length === 0 && !parent ? <SidebarMessage /> : <Menu>Menu</Menu>}</Wrapper>;
}
