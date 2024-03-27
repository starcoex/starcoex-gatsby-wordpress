import React from "react";
import { useContentQuery } from "../../hooks/useContentQuery";
import Content from "../Content";
import { Wrapper } from "../../styles/ContentArea.styles";

export default function ContentArea() {
  const { wpPage } = useContentQuery();

  return (
    <Wrapper>
      {new Array(3).fill("").map((element, index) => (
        <Content
          key={index}
          //@ts-ignore
          image={wpPage?.ACF_HomePage[`cta${index + 1}Image`].localFile.childImageSharp?.gatsbyImageData!}
          //@ts-ignore
          link={wpPage?.ACF_HomePage[`cta${index + 1}Link`]}
          //@ts-ignore
          text={wpPage?.ACF_HomePage[`cta${index + 1}Text`]}
        />
      ))}
    </Wrapper>
  );
}
