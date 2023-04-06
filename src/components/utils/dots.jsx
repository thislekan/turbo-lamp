import styled from "styled-components";

const StyledDots = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .dot {
    height: 2px;
    width: 2px;
    margin: 0 1.2px;
    border: 1px solid #b4bab7;
    background-color: #b4bab7;
    border-radius: 2px;

    &--active {
      width: 10px;
      border: 1px solid #161828;
      background-color: #161828;
    }
  }
`;
export const Dots = ({ isAbsolute, slideFunc }) => {
  return (
    <StyledDots
      className={`dots ${!isAbsolute ? "" : "dots--absolute"}`}
      onClick={slideFunc}
    >
      <div className="dot dot--active"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </StyledDots>
  );
};
