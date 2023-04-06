import { StyledHeroOptions } from "components/hero-options/styles";
import Flight from "media/svg/plane-alt.svg";
import World from "media/svg/globe.svg";
import Category from "media/svg/apps-delete.svg";
import NotePad from "media/svg/notebook.svg";
import { Dots } from "components/utils/dots";

export const HeroOptions = () => {
  return (
    <StyledHeroOptions className="sticky">
      <div className="sticky__wrapper">
        <div className="options">
          <div className="option">
            <img src={Category} alt="menu icon" className="menu" />
          </div>
          <div className="option">
            <img src={Flight} alt="flight icon" className="flight" />
          </div>
          <div className="option">
            <img src={NotePad} alt="notepad icon" />
          </div>
          <div className="option">
            <img src={World} alt="globe icon" />
          </div>
          <div className="option">
            <span className="dollar">${/* <span className="circle" /> */}</span>
          </div>
        </div>
        <Dots />
      </div>
    </StyledHeroOptions>
  );
};
