import React from "react";
import { useHeroQuery } from "../../hooks/useHeroQuery";
import { getImage } from "gatsby-plugin-image";
import { HeaderWrapper, StyledImg, Wrapper } from "../../styles/Hero.styles";

export default function Hero() {
  const { wpPage } = useHeroQuery();
  const imageData = getImage(wpPage?.ACF_HomePage?.heroImage?.localFile?.childImageSharp?.gatsbyImageData!);
  return (
    <Wrapper>
      <StyledImg image={imageData!} alt={"Hero Image"} />
      <HeaderWrapper>
        <h1>{wpPage?.ACF_HomePage?.heroText}</h1>
      </HeaderWrapper>
    </Wrapper>
  );
}
