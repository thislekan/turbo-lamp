import { Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";
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

  return (
    <StyledApp ref={appRef}>
      <TopNav isProductPage={isProductPage} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </div>
      <BottomNav isProductPage={isProductPage} />
    </StyledApp>
  );
}

export default App;
