import { Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { BottomNav } from "components/bottom-nav";
import { TopNav } from "components/top-nav";
import { ProductDetails } from "components/product/productDetails";
import { Home } from "components/home";

const StyledApp = styled.div`
  height: calc(100vh - 180px);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 90px 0;

  @media (min-width: 550px) {
    display: none;
  }
`;

function App() {
  const appRef = useRef(null);
  const location = useLocation();
  const isProductPage = location.pathname === "/product";
  const transitions = useTransition(location, {
    from: { opacity: 1, transform: "translate3d(0, 100vh, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" },
    config: { duration: 500 },
  });

  return (
    <StyledApp ref={appRef}>
      <TopNav isProductPage={isProductPage} />
      <div className="container">
        {transitions((props, item) => (
          <animated.div style={props}>
            <Routes location={item}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductDetails />} />
            </Routes>
          </animated.div>
        ))}
      </div>
      <BottomNav isProductPage={isProductPage} />
    </StyledApp>
  );
}

export default App;
