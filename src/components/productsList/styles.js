import styled from "styled-components";

export const StyledProductsList = styled.section`
  .wrapper {
    padding: 0 10px;
    &__content {
      .best-sales {
        &__title {
          position: sticky;
          top: 0;
          background: white;
          height: 50px;
          z-index: 5;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 15px 0 25px;

          h4 {
            font-weight: 500;
            font-size: 18px;
            margin: unset;
          }

          button {
            border: unset;
            outline: none;
            background-color: unset;
            padding: unset;
            height: unset;
            width: unset;
            color: #3d9e86;
            font-weight: 600;
          }
        }
      }
    }
  }

  @media (min-width: 300px) {
    .wrapper {
      &__content {
        .best-sales {
          .card-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
          }
        }
      }
    }
  }
`;
