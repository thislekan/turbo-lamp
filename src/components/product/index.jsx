import LikeImage from "media/svg/heart.svg";
import Star from "media/svg/star.svg";
import { StyledCard } from "components/product/styles";

export const Card = ({ rating, price, name, tags, ratingsCount, image }) => {
  return (
    <StyledCard className="card">
      <div className="card__content">
        <img src={LikeImage} alt="heart icon" className="icon" />
        <div className="image-div">
          <img src={image} alt="Product Preview" />
        </div>
        <div className="description">
          <p className="tags">{tags}</p>
          <h6 className="title">{name}</h6>
          <div className="number">
            <div className="number__grouped">
              <img src={Star} alt="" className="star" />
              <p className="ratings">
                {rating} | {ratingsCount}
              </p>
            </div>
            <p className="price">${price}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};
