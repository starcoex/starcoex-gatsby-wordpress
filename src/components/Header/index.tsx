import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "gatsby";
import { Content, Wrapper } from "../../styles/Header.styles";
import useMenuQuery from "../../hooks/useMenuQuery";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { site, wpMenu } = useMenuQuery();
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site?.siteMetadata?.title!} />
        </Link>
        <Navigation menu={wpMenu?.menuItems?.nodes!} />
      </Content>
    </Wrapper>
  );
}
