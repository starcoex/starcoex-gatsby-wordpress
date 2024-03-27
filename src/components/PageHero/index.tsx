import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { StyledImg } from "../../styles/PageHero.styles";

interface IPageHeroProps {
  image: IGatsbyImageData | undefined;
}

export default function PageHero({ image }: IPageHeroProps) {
  return <StyledImg image={image!} alt="Page Hero" />;
}
