import styled from "styled-components";

const StyledScreen1 = styled.div`
  background-position: 10% 25%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  will-change: transform, opacity;

  .wrapper {
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 100%;

    &__content {
      margin-top: 90px;
      height: calc(100% - 90px);
      width: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .cta {
        background-color: #2b2d40;
        color: white;
        height: 40px;
        width: 125px;
        border-radius: 5px;
        border: 1px solid #2b2d40;
        font-weight: 600;
        font-size: 12px;
        margin-top: 15px;
      }

      h5,
      h1,
      p {
        margin: unset;
        color: #161828;
      }

      h5 {
        font-weight: 700;
        font-family: sans-serif;
        letter-spacing: 1px;

        span {
          font-family: "Readex Pro", sans-serif;
        }
      }

      h1 {
        letter-spacing: -1px;
        word-spacing: -3px;
        font-weight: 500;

        span {
          letter-spacing: -3px;
        }
      }

      .hero {
        font-size: 15px;
        letter-spacing: unset;
        text-transform: uppercase;
        font-family: sans-serif;
        font-weight: 600;
        margin: 5px 0;
        word-spacing: unset;
      }

      .closer {
        letter-spacing: -0.3px;
      }

      p {
        font-size: 12px;
        font-weight: 400;
        color: rgba(22, 24, 40, 0.4);
        line-height: 1.5;
      }
    }
  }
`;
export const Screen = ({ hashtag, percentage, discover, bgImage, hero }) => {
  return (
    <StyledScreen1 style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="wrapper">
        <div className="wrapper__content">
          <h5 className={hero ? "closer" : ""}>
            <span>#</span>
            {hashtag}
          </h5>
          {typeof percentage === "number" ? (
            <h1>
              {percentage}% <span>OFF</span>
            </h1>
          ) : (
            <h1 className="hero">{hero}</h1>
          )}
          {discover && <p>{discover}</p>}
          <button className="cta">Check this out</button>
        </div>
      </div>
    </StyledScreen1>
  );
};
