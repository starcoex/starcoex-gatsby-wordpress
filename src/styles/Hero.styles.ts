import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 2rem;
    color: #fff;
  }
`;
