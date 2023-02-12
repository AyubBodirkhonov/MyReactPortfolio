import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import monstersImage from "../../../assets/content-img/monstersImage.png";

import { cards } from "../../../assets/documentation/cardData";
import Button from "../../UI/button.component";
import "./cardSlider.style.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const CardSlider = () => {
  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-top">
            <img src={monstersImage} alt={card.title} />
          </div>
          <div className="card-bottom">
            <h3>{card.title}</h3>
            <h5>{card.subTitle}</h5>
            <p>{card.description}</p>
            <Button>Click to see more</Button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
