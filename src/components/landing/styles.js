import styled from "styled-components";

export const StyledLandingPage = styled.section`
  position: relative;

  .dots {
    &--absolute {
      position: absolute;
      top: calc(10% - 2px);
      right: 10px;
      z-index: 5;
    }
  }

  .carousel {
    height: 30vh;
    position: relative;
    overflow: hidden;
  }
`;
