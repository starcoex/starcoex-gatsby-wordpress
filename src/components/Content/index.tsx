import React from "react";
import { ContentImg, ContentImgText, ContentImgTextWrapper, StyledImg } from "../../styles/Content.styles";
import { Link } from "gatsby";

interface IContentProps {
  image: any;
  link: string;
  text: string;
}

export default function Content({ image, link, text }: IContentProps) {
  return (
    <ContentImg>
      <StyledImg image={image} alt="Content Image" />
      <Link to={link}>
        <ContentImgTextWrapper>
          <ContentImgText>{text}</ContentImgText>
        </ContentImgTextWrapper>
      </Link>
    </ContentImg>
  );
}
