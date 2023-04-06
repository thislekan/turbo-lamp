import { StyledBottomNav } from "components/bottom-nav/styles";
import HomeImg from "media/svg/home.svg";
import Voucher from "media/svg/ticket.svg";
import Wallet from "media/svg/wallet.svg";
import Settings from "media/svg/settings.svg";
import WhiteBag from "media/svg/whiteBag.svg";

export const BottomNav = ({ isProductPage }) => {
  return (
    <StyledBottomNav className={`bottom ${isProductPage ? "animate" : ""}`}>
      <div className="bottom__wrapper">
        <div className="bottom__wrapper__content">
          <div className={`home ${isProductPage ? "home--page2" : ""}`}>
            {!isProductPage ? (
              <div className="options">
                <div className="option option--active">
                  <img src={HomeImg} alt="home icon" />
                  <p>Home</p>
                </div>
                <div className="option">
                  <img src={Voucher} alt="voucher icon" className="voucher" />
                  <p>Voucer</p>
                </div>
                <div className="option">
                  <img src={Wallet} alt="wallet icon" />
                  <p>Wallet</p>
                </div>
                <div className="option">
                  <img src={Settings} alt="settings icon" />
                  <p>Settings</p>
                </div>
              </div>
            ) : (
              <div className="to-checkout">
                <div className="price">
                  <p className="total">Total Price</p>
                  <p className="figure">$18.00</p>
                </div>
                <div className="btn-div">
                  <button className="bag">
                    <img src={WhiteBag} alt="bag icon" />1
                  </button>
                  <button className="buy">Buy Now</button>
                </div>
              </div>
            )}
            <div className="divider" />
          </div>
        </div>
      </div>
    </StyledBottomNav>
  );
};
