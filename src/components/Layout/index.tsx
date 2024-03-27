import React, { useState } from "react";
import MobileMenu from "../MobileMenu";
import { Primary } from "../../styles/Primary.styles";
import { GlobalStyles } from "../../styles/GlobalStyles";
import Header from "../Header";
import Footer from "../Footer";
import MobileOverlayMenu from "../MobileOverlayMenu";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOverlayMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <GlobalStyles />
      <MobileOverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <MobileMenu handleOverlayMenu={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  );
}
