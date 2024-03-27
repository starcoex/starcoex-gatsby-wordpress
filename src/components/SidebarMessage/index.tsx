import React from "react";
import tangoMail from "../../images/mail-icon.svg";
import { Wrapper } from "../../styles/SidebarMessage.styles";

export default function SidebarMessage() {
  return (
    <Wrapper>
      <div>
        <img src={tangoMail} alt="cakeit-mail" />
        <span>Mail list</span>
      </div>
      <p>
        Do you want to get updated when we publish new stuff?
        <br />
        Just email us with your name and email adress
        <br />
        <br />
        <a href="mailto:info@cakeitfakeit.com">Email</a>
      </p>
    </Wrapper>
  );
}
