import "./work.styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import monstersImage from "../../assets/content-img/monstersImage.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  cssEase: "linear",
  autoplay: false,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  paddingLeft: 30,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
const cards = [
  {
    id: 1,
    title: "Monster Rolodex",
    subTitle: "JavaScript, React, Css",
    description: "I have built this project when I first learned React",
  },
  {
    id: 2,
    title: "Monster Rolodex",
    subTitle: "JavaScript, React, Css",
    description: "I have built this project when I first learned React",
  },
  {
    id: 3,
    title: "Monster Rolodex",
    subTitle: "JavaScript, React, Css",
    description: "I have built this project when I first learned React",
  },
  {
    id: 4,
    title: "Monster Rolodex",
    subTitle: "JavaScript, React, Css",
    description: "I have built this project when I first learned React",
  },
  {
    id: 5,
    title: "Monster Rolodex",
    subTitle: "JavaScript, React, Css",
    description: "I have built this project when I first learned React",
  },
  {
    id: 6,
    title: "Monster Rolodex",
    subTitle: "JavaScript, React, Css",
    description: "I have built this project when I first learned React",
  },
];
const Work = () => {
  return (
    <div id="work" className="section-work">
      <h2> Projects </h2>
      <Slider {...settings} className={"slick-carousel"}>
        {cards.map(({ title, id, subTitle, description }) => (
          <div key={id} className="carousel-card">
            <img src={monstersImage} alt={title} />
            <div className="content">
              <h3>{title}</h3>
              <h5>{subTitle}</h5>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Work;
