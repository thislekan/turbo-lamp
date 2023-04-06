import styled from "styled-components";

export const StyledTopNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: white;
  display: flex;
  align-items: center;
  z-index: 5;
  background-color: transparent;

  .top {
    &__wrapper {
      width: 100%;
      &__content {
        padding: 0 10px;
        width: calc(100% - 20px);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .input-div {
          position: relative;
          display: flex;
          align-items: center;
          width: 60%;

          img {
            height: 25px;
            width: 25px;
            position: absolute;
            margin-left: 10px;
          }

          input {
            height: 40px;
            width: 100%;
            border: 1px solid #afb2b6;
            border-radius: 5px;
            background: transparent;

            &::placeholder {
              padding-left: 45px;
              text-transform: capitalize;
              letter-spacing: 0.5px;
            }
          }

          @media (min-width: 320px) {
            width: 70%;
          }
        }

        .icons {
          .back {
            img {
              height: 20px;
              width: 20px;
            }
          }
          .options {
            display: flex;
            align-items: center;

            .option {
              height: 35px;
              width: 35px;
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              img {
                height: 25px;
                width: 25px;
              }

              span {
                position: absolute;
                top: 2px;
                right: -3px;
                background-color: #e55986;
                color: #ffffff;
                height: 15px;
                width: 18px;
                padding: 0 2px 3px;
                font-family: sans-serif;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                font-size: 12px;
                border-radius: 2px;
              }

              &--comments {
                margin-left: 20px;

                span {
                  top: 0px;
                  right: -2px;
                  font-family: inherit;
                }
              }
            }
          }

          &--page2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            .option {
              margin-left: 15px;
            }
          }
        }
      }
    }
  }
`;
