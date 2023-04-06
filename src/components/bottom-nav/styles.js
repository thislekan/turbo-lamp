import styled from "styled-components";

export const StyledBottomNav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 70px;
  z-index: 5;
  background: #fff;
  padding: 15px 0;
  visibility: hidden;

  @keyframes poof {
    from {
      opacity: 0;
      transform: translate3d(0, 95px, 0);
      visibility: hidden;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }
  }

  &.animate {
    animation-name: poof;
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-delay: 1s;
    visibility: visible !important;
  }

  /* &.bottom {
    visibility: visible !important;
  } */

  .bottom {
    &__wrapper {
      &__content {
        .home {
          display: flex;
          flex-direction: column;
          align-items: center;

          .options {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;

            .option {
              text-align: center;
              color: rgb(119 119 119 / 75%);

              &--active {
                color: #141515;
              }

              img {
                height: 20px;
                width: 20px;
              }

              .voucher {
                transform: rotateZ(90deg);
              }

              p {
                margin: 5px 0 0;
                letter-spacing: -0.1px;
                font-family: sans-serif;
                font-size: 14px;
              }
            }
          }

          .divider {
            height: 2px;
            width: 40%;
            border: 1px solid #c9cdd8;
            background-color: #c9cdd8;
            border-radius: 10px;
            margin-top: 25px;
          }

          &--page2 {
            padding: 0 10px;

            .to-checkout {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .price {
                .total {
                  margin: unset;
                  font-size: 12px;
                  color: rgba(133, 127, 127, 0.65);
                }
                .figure {
                  margin: 5px 0 0;
                  color: #3d9e86;
                  font-size: 25px;
                  font-family: "Montserrat", sans-serif;
                  font-weight: 600;
                }
              }

              .btn-div {
                display: flex;
                align-items: center;

                button {
                  height: 50px;
                  display: flex;
                  align-items: center;
                  padding: unset;
                  color: white;
                  font-weight: 600;
                }

                .bag {
                  background-color: #4bb198;
                  border: 1px solid #4bb198;
                  width: 50px;
                  padding: 0 5px;
                  border-radius: 6px 0 0 6px;
                  border: 1px solid #4bb198;
                  border-right: none;
                  justify-content: space-around;
                  font-size: 18px;
                  font-family: "Montserrat", sans-serif;

                  img {
                    height: 20px;
                    width: 20px;
                  }
                }
                .buy {
                  width: 85px;
                  border: 1px solid #2b2d40;
                  background-color: #2b2d40;
                  justify-content: center;
                  border-left: none;
                  border-radius: 0 6px 6px 0;
                }
              }
            }
          }
        }
      }
    }
  }
`;
