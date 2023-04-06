import styled from "styled-components";

export const StyledHeroOptions = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  background-color: white;

  .sticky {
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .options {
        display: inherit;
        align-items: inherit;
        justify-content: space-around;
        width: 100%;

        .option {
          height: 20px;
          width: 20px;
          padding: 10px;
          background-color: #f6f6f6;
          border: 1px solid #f6f6f6;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
            height: 100%;
          }

          .menu {
            transform: rotateX(180deg);
          }

          .flight {
            transform: rotateZ(-90deg);
          }

          .dollar {
            font-size: 12px;
            border: 1px solid #5d5d62;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            height: 15px;
            width: 15px;
            color: #6f6f76;
            z-index: 2;
            background-color: #f6f6f6;

            .circle {
              position: absolute;
              height: 8px;
              width: 8px;
              border: 1px solid #5d5d62;
              border-radius: 100%;
              display: block;
              bottom: -1px;
              right: -6px;
            }
          }
        }
      }
    }
  }
`;
