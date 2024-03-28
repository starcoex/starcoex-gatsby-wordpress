import React from "react";
import { useAboutQuery } from "../../hooks/useAboutQuery";
import { AboutImg, AboutWrapper } from "../../styles/About.style";

export default function About() {
  const { wpPage } = useAboutQuery();
  const imageData = wpPage?.featuredImage?.node?.localFile?.publicURL;
  return (
    <AboutWrapper>
      <AboutImg image={imageData} />
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: wpPage?.content! }}></div>
      </div>
    </AboutWrapper>
  );
}
