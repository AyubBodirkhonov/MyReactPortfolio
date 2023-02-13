import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../../../assets/documentation/cardData";
import Button from "../../UI/button.component";
import "./cardSlider.style.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
            <img src={card.src} alt={card.title} />
          </div>
          <div className="card-bottom">
            <h3>{card.title}</h3>
            <h5>{card.subTitle}</h5>
            <p>{card.description}</p>
            <a href={card.url} target="_blank" rel="noreferrer">
              <Button>Click to see more</Button>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
