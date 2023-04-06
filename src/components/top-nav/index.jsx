import { StyledTopNav } from "components/top-nav/styles";
import Bag from "media/svg/shopping-bag.svg";
import Comments from "media/svg/comment-alt.svg";
import Search from "media/svg/search.svg";
import ChevronLeft from "media/svg/angle-left.svg";
import Like from "media/svg/heart.svg";
import Share from "media/svg/share.svg";

export const TopNav = ({ isProductPage }) => {
  return (
    <StyledTopNav className="top">
      <div className="top__wrapper">
        <div className="top__wrapper__content">
          {!isProductPage && (
            <div className="input-div">
              <img src={Search} alt="search icon" />
              <input type="text" placeholder="search..." />
            </div>
          )}
          <div className={`icons ${isProductPage ? "icons--page2" : ""}`}>
            {isProductPage && (
              <div className="back">
                <img src={ChevronLeft} alt="Left Arrow Icon" />
              </div>
            )}
            <div className="options">
              {isProductPage && (
                <>
                  <div className="option">
                    <img src={Like} alt="Heart icon" />
                  </div>
                  <div className="option">
                    <img src={Share} alt="share icon" />
                  </div>
                </>
              )}
              <div className="option">
                <img src={Bag} alt="" />
                <span className="msg">1</span>
              </div>
              {!isProductPage && (
                <div className="option option--comments">
                  <img src={Comments} alt="" />
                  <span className="msg">9+</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledTopNav>
  );
};
