import styled from "styled-components";

export const StyledCard = styled.div`
  margin-bottom: 30px;
  background-color: #ffffff;
  .card {
    &__content {
      position: relative;

      .image-div {
        height: 150px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
      }

      .icon {
        height: 20px;
        width: 20px;
        position: absolute;
        top: 15px;
        right: 15px;
      }

      .description {
        padding: 10px;
        p {
          margin: unset;
        }
        .tags {
          font-size: 14px;
          color: rgba(133, 127, 127, 0.65);
          letter-spacing: 0.1px;
        }
        .title {
          margin: 5px 0 15px;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.35;
          letter-spacing: -0.5px;
        }

        .number {
          display: flex;
          align-items: center;
          justify-content: space-between;

          &__grouped {
            margin-top: 3px;
            display: inherit;
            align-items: inherit;
            justify-content: inherit;

            img {
              width: 15px;
              height: 15px;
              margin-right: 5px;
            }

            .ratings {
              font-size: 13px;
              color: rgba(133, 127, 127, 0.65);
              font-weight: 500;
            }
          }
          .price {
            color: #3d9e86;
            font-size: 20px;
          }
        }
      }
    }
  }

  :hover {
    box-shadow: 13px 5px 10px 16px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 300px) {
    .card {
      &__content {
        .icon {
          top: 5px;
          right: 5px;
          height: 15px;
          width: 15px;
        }
        .image-div {
          height: 95px;
        }
        .description {
          .tags,
          .title {
            font-size: 10px;
          }
          .title {
            margin: 5px 0px;
          }
          .number {
            &__grouped {
              .ratings {
                font-size: 8px;
              }
            }
            .price {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 313px) {
    .card {
      &__content {
        .description {
          .title {
            font-size: 11px;
          }
        }
      }
    }
  }

  @media (min-width: 336px) {
    .card {
      &__content {
        .description {
          .title {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media (min-width: 383px) {
    .card {
      &__content {
        .description {
          .tags {
            font-size: 12px;
          }
          .title {
            font-size: 14px;
          }
          .number {
            &__grouped {
              .ratings {
                font-size: 12px;
              }
            }
            .price {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;

export const StyledProductDetails = styled.div`
  padding: 90px 0;
  margin-top: -90px;

  .wrapper {
    padding: 0 10px;

    .img-related {
      .images {
        display: flex;
        height: 35vh;
        width: calc(100% - 30px);
        padding: 15px;
        background-color: #f0f0f0;
        border-radius: 7px;

        .column {
          height: 100%;
          width: 50px;
          display: inherit;
          flex-direction: column;

          .box {
            margin-bottom: 8px;
            height: 35px;
            width: 30px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;

            img {
              height: 100%;
              width: 100%;
              border-radius: 5px;
              border: 1px solid transparent;
              /* #9fa0a6 */
            }
          }
        }

        .view {
          width: 100%;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      }

      .texts {
        .shop-name {
          display: flex;
          align-items: center;
          margin-top: 20px;

          img {
            height: 18px;
            width: 18px;
          }

          p {
            color: #9fa0a6;
            margin: 0 0 0 5px;
            font-size: 14px;
            font-weight: 300;
          }
        }

        .title {
          h5 {
            margin: 15px 0 0;
            font-size: 18px;
            font-weight: 500;
          }

          .numbers {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: rgba(133, 127, 127, 0.65);
            margin: 10px 0;

            .number {
              &__grouped {
                margin-top: 3px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                  width: 15px;
                  height: 15px;
                  margin-right: 5px;
                }

                .ratings {
                  font-size: 13px;
                  color: rgba(133, 127, 127, 0.65);
                  font-weight: 500;
                  margin: unset;
                }
              }
            }

            .reviews,
            .sold {
              font-size: 13px;
              color: rgba(133, 127, 127, 0.65);
              font-weight: 500;
              margin: unset;
            }

            .dot {
              background-color: rgba(133, 127, 127, 0.65);
              border: 1px solid rgba(133, 127, 127, 0.65);
              border-radius: 100%;
              height: 2px;
              width: 2px;
            }
          }
        }
      }
    }

    .details {
      .info {
        &__nav {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #ecedee;
          width: 100%;
          position: relative;

          .btn {
            margin: unset;
            width: 50%;
            z-index: 1;
            cursor: pointer;
            padding: 7px 0 7px 15px;

            &--active {
              text-align: center;
              color: #2a957b;
              border-bottom: 1px solid #2a957b;
              position: relative;
              bottom: -4px;
              padding: 7px 0 0 0;
            }

            .target {
              font-family: "Montserrat", sans-serif;
            }
          }
        }

        &__content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 15px 10px;
          margin: 15px 0;
          padding-bottom: 20px;
          border-bottom: 1px solid rgb(236, 237, 238);

          .items-details {
            font-size: 14px;
            letter-spacing: -1px;
            margin: unset;
            width: 100%;
            display: flex;
            align-items: center;

            span {
              font-size: 12px;
              letter-spacing: -0.5px;
              color: rgba(133, 127, 127, 0.65);
              margin-right: 5px;
            }
          }
        }
      }

      .description {
        border-bottom: 1px solid rgb(236, 237, 238);
        padding-bottom: 25px;

        .title {
          letter-spacing: -0.5px;
          font-weight: 500;
        }

        ul {
          padding-inline-start: 20px;
          color: #8a8c95;
          font-size: 12px;
          font-family: "Montserrat";
          letter-spacing: -0.5px;

          li {
            margin: 0 0 10px 0;
            p {
              margin: unset;
            }
          }
        }

        .see-less {
          margin: 15px 0 0;
          background: unset;
          border: unset;
          outline: unset;
          color: #2a957b;
        }
      }

      .shipping {
        border-bottom: 1px solid rgb(236, 237, 238);
        padding-bottom: 25px;

        .title {
          letter-spacing: -0.5px;
          font-weight: 500;
          font-size: 15px;
          margin: 35px 0 15px;
        }

        p {
          font-size: 14px;
          letter-spacing: -1px;
          margin: 15px 0;
          width: 100%;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          font-weight: 500;

          span {
            font-size: 12px;
            letter-spacing: -0.5px;
            color: rgba(133, 127, 127, 0.65);
            margin-right: 5px;
          }
        }
      }

      .seller {
        .title {
          p {
            font-weight: 600;
            letter-spacing: -0.8px;
            margin-top: 25px;
          }
        }
        .details {
          display: flex;
          /* align-items: center; */
          justify-content: space-between;

          .image {
            background-color: #e9ebea;
            border: 1px solid #e9ebea;
            position: relative;
            border-radius: 100%;
            height: 55px;
            width: 55px;
            display: inherit;
            align-items: center;
            justify-content: center;

            .dot {
              height: 15px;
              width: 15px;
              background-color: white;
              border-radius: 100%;
              position: absolute;
              bottom: 1px;
              right: -2px;
              display: flex;
              align-items: center;
              justify-content: center;

              &__child {
                border: 1px solid #e9ebea;
                height: 8px;
                width: 8px;
                background-color: #e9ebea;
                border-radius: 100%;
              }
            }

            img {
              height: 25px;
              width: 25px;
            }
          }
        }
        .info {
          width: 70%;
          p {
            margin: unset;
          }
          .name {
            font-weight: 600;
            margin-bottom: 10px;
            letter-spacing: -0.8px;
          }
          .duration {
            font-size: 12px;
            color: rgba(133, 127, 127, 0.65);
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin-bottom: 15px;
          }
          button {
            height: 35px;
            width: 130px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background-color: white;
            border: 1px solid #2d977e;
            color: #2d977e;
            font-weight: 700;
            border-radius: 7px;

            img {
              height: 15px;
              width: 15px;
            }
          }
        }
      }
    }
  }
`;
