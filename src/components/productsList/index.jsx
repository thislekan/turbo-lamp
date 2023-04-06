import { Card } from "components/product";
import { StyledProductsList } from "components/productsList/styles";
import Shirt1 from "media/shirt1.jpeg";
import Shirt2 from "media/shirt 2.jpg";
import Shirt3 from "media/shirt3.webp";
import Shirt4 from "media/shirt4.jpeg";

export const ProductsList = () => {
  return (
    <StyledProductsList>
      <div className="wrapper">
        <div className="wrapper__content">
          <div className="best-sales">
            <div className="best-sales__title">
              <h4>Best Sale Product</h4>
              <button>See more</button>
            </div>
            <div className="card-list">
              <Card
                name="Essential Men's Short-Sleeve Crewneck T-Shirt"
                rating={4.9}
                ratingsCount={2356}
                tags="Shirt"
                price={34.55}
                image={Shirt2}
              />
              <Card
                name="Essential Men's Short-Sleeve Crewneck T-Shirt"
                rating={4.9}
                ratingsCount={2356}
                tags="Short"
                price={34.55}
                image={Shirt1}
              />
              <Card
                name="Essential Men's Short-Sleeve Crewneck T-Shirt"
                rating={4.9}
                ratingsCount={2356}
                tags="Shirt"
                price={34.55}
                image={Shirt4}
              />
              <Card
                name="Essential Men's Short-Sleeve Crewneck T-Shirt"
                rating={4.9}
                ratingsCount={2356}
                tags="Short"
                price={34.55}
                image={Shirt3}
              />
              <Card
                name="Essential Men's Short-Sleeve Crewneck T-Shirt"
                rating={4.9}
                ratingsCount={2356}
                tags="Shirt"
                price={34.55}
                image={Shirt2}
              />
              <Card
                name="Essential Men's Short-Sleeve Crewneck T-Shirt"
                rating={4.9}
                ratingsCount={2356}
                tags="Short"
                price={34.55}
                image={Shirt1}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledProductsList>
  );
};
