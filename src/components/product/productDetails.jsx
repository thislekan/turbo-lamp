import { StyledProductDetails } from "components/product/styles";
import Button from "media/button.jpeg";
import Back from "media/back.jpeg";
import Sleeve from "media/sleeve.jpeg";
import Neck from "media/neck.jpeg";
import Shirt1 from "media/shirt1.jpeg";
import Star from "media/svg/star.svg";
import Shop from "media/svg/shop.svg";
import ShopGreen from "media/svg/shop-green.svg";

export const ProductDetails = () => {
  return (
    <StyledProductDetails>
      <div className="wrapper">
        <div className="img-related">
          <div className="images">
            <div className="column">
              <div className="box">
                <img src={Back} alt="back vision" />
              </div>
              <div className="box">
                <img src={Neck} alt="neck vision" />
              </div>
              <div className="box">
                <img src={Button} alt="Button vision" />
              </div>
              <div className="box">
                <img src={Sleeve} alt="sleeve vision" />
              </div>
            </div>
            <div className="view">
              <img src={Shirt1} alt="Selected shirt preview" />
            </div>
          </div>
          <div className="texts">
            <div className="shop-name">
              <img src={Shop} alt="shop icon" />
              <p>Thrifting_store</p>
            </div>
            <div className="title">
              <h5>Essential Men's Short-Sleeve Crewneck T-Shirt</h5>
              <div className="numbers">
                <div className="number__grouped">
                  <img src={Star} alt="star icon" className="star" />
                  <p className="ratings">4.9 Ratings</p>
                </div>
                <div className="dot" />
                <p className="reviews">2.3K+ Reviews</p>
                <div className="dot" />
                <p className="sold">2.9K+ Sold</p>
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="info">
            <div className="info__nav">
              <p className="btn btn--active">
                About <span className="target">I</span>tem
              </p>
              <p className="btn">Reviews</p>
            </div>
            <div className="info__content">
              <p className="items-details">
                <span>Brand:</span> ChArmKpr
              </p>
              <p className="items-details">
                <span>Color:</span> Aprilkot
              </p>
              <p className="items-details">
                <span>Category:</span> Casual Shirt
              </p>
              <p className="items-details">
                <span>Material:</span> Polyester
              </p>
              <p className="items-details">
                <span>Condition:</span> New
              </p>
              <p className="items-details">
                <span>Heavy:</span> 200g
              </p>
            </div>
          </div>
          <div className="description">
            <p className="title">Description: </p>
            <ul>
              <li className="point">
                <p>
                  Long-sleeve dress shirt in classic fit featuring button down
                  collar
                </p>
              </li>
              <li className="point">
                <p>Patch Pocket on Left Chest</p>
              </li>
              <li className="point">
                <p>Durable Combination Cotton Fabric</p>
              </li>
              <li className="point">
                <p>Comfortable and quality dress shirt</p>
              </li>
              <li className="point">
                <p>
                  Go To Classic button down shirt for all special occassions
                </p>
              </li>
            </ul>
            <button className="see-less">See less...</button>
          </div>
          <div className="shipping">
            <h5 className="title">Shippings Information:</h5>
            <p>
              <span>Delivery:</span> Shipping from Jakarta, Indonesia
            </p>
            <p>
              <span>Shipping:</span> FREE International Shipping
            </p>
            <p>
              <span>Arrive:</span> Estimated arrival on 25-27 Oct 2022
            </p>
          </div>
          <div className="seller">
            <div className="title">
              <p>Seller Information :</p>
            </div>
            <div className="details">
              <div className="image">
                <img src={ShopGreen} alt="green colored shop icon" />
                <span className="dot">
                  <span className="dot__child"></span>
                </span>
              </div>
              <div className="info">
                <p className="name">Thrifting_Store</p>
                <p className="duration">
                  Active 5mins ago | 96.7% Positive Feedback
                </p>
                <button>
                  <img src={ShopGreen} alt="green colored shop icon" />
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledProductDetails>
  );
};
