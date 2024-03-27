import React from "react";
import MenuIcon from "../../images/menu-icon.svg";
import { MoBileMenuButton } from "../../styles/MobileMenu.styles";

interface IMobileMenuProps {
  handleOverlayMenu: () => void;
}

export default function MobileMenu({ handleOverlayMenu }: IMobileMenuProps) {
  return (
    <MoBileMenuButton onClick={handleOverlayMenu}>
      <img src={MenuIcon} alt="MobileMenu" />
    </MoBileMenuButton>
  );
}
