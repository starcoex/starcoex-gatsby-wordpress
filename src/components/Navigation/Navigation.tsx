import { Link } from "gatsby";
import React from "react";
import { Wrapper } from "../../styles/Navigation.styles";

interface INavigationProps {
  menu:
    | readonly ({
        readonly label: string | null;
        readonly id: string;
        readonly url: string | null;
        readonly parentId: string | null;
        readonly childItems: {
          readonly nodes:
            | readonly ({
                readonly label: string | null;
                readonly url: string | null;
                readonly id: string;
              } | null)[]
            | null;
        } | null;
      } | null)[]
    | null
    | undefined;
}

export default function Navigation({ menu }: INavigationProps) {
  return (
    <Wrapper>
      <ul>
        {menu?.map((mainItem) =>
          !mainItem?.parentId ? (
            <li key={mainItem?.id}>
              <Link to={mainItem?.url!} activeClassName="nav-active">
                {mainItem?.label}
                {mainItem?.childItems?.nodes?.length !== 0 && <div>&#8964;</div>}
              </Link>
              {mainItem?.childItems?.nodes?.length !== 0 ? (
                <ul>
                  {mainItem?.childItems?.nodes?.map((childItem) => (
                    <li key={childItem?.id}>
                      <Link to={childItem?.url!} activeClassName="nav-active">
                        {childItem?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ) : null
        )}
      </ul>
    </Wrapper>
  );
}
