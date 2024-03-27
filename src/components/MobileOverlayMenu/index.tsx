import React from "react";
import InvertedLogo from "../../images/logo-inverted.svg";
import CloseButton from "../../images/close_btn.svg";
import useMenuQuery from "../../hooks/useMenuQuery";
import { Overlay } from "../../styles/MobileOverlayMenu.styles";
import { Link } from "gatsby";

interface IMobileOverlayMenuProps {
  menuOpen: boolean;
  callback: () => void;
}

export default function MobileOverlayMenu({ menuOpen, callback }: IMobileOverlayMenuProps) {
  const { wpMenu } = useMenuQuery();
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img src={InvertedLogo} alt="invertedLogo" className="invertedLogo" />
        <ul className="overlayMenu">
          {wpMenu?.menuItems?.nodes?.map((item) =>
            !item?.parentId ? (
              <li key={item?.id}>
                <Link to={item?.url!} activeClassName="overlayActive">
                  {item?.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div className="closeButton" onClick={callback} role="button" tabIndex={0} onKeyDown={callback}>
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  );
}
