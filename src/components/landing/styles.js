import styled from "styled-components";

export const StyledLandingPage = styled.section`
  position: relative;

  .dots {
    &--absolute {
      position: absolute;
      top: 110px;
      right: 10px;
      z-index: 5;
    }
  }

  .carousel {
    height: 30vh;
    position: relative;
    overflow: hidden;
  }

  @media (max-height: 550px) {
    .carousel {
      height: 40vh;
    }
  }
`;
