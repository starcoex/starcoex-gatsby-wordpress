import React from "react";
import { data } from "autoprefixer";
import { useQuoteQuery } from "../../hooks/useQuoteQuery";
import QuoteImg from "../../images/quote.svg";
import { Content, Wrapper } from "../../styles/Quote.styles";

export default function Quote() {
  const { wpPage } = useQuoteQuery();
  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="quote" />
        <h6>{wpPage?.ACF_HomePage?.citat1Text}</h6>
        <p>{wpPage?.ACF_HomePage?.citat1Author}</p>
      </Content>
    </Wrapper>
  );
}
