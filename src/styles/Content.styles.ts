import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`;

export const ContentImg = styled.div`
  margin-bottom: 20px;
  max-height: 100px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    filter: blur(1px);
  }

  @media (min-width: 768px) {
    min-height: 200px;
  }
`;

export const ContentImgTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10;
`;

export const ContentImgText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: "Teko";
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
