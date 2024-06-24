import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images/review/review1.png";
import img2 from "../../../assets/images/review/review2.png";
import img3 from "../../../assets/images/review/review3.png";
const data = [
  {
    img: img1,
    title: "Best! I got the house I wanted through Hounter",
    desciptions:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    avatar: "",
    name: "Dianne Russell",
    role: "Manager Director",
    rating: "4.6",
  },
  {
    img: img2,
    title: "My house sold out fast!",
    desciptions:
      "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
    avatar: "",
    name: "Courtney Henry",
    role: "CEO Andarafish",
    rating: "4.3",
  },
  {
    img: img3,
    title: "Through the Hounter, I can get a house for my self",
    desciptions:
      "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
    avatar: "",
    name: "Esther Howard",
    role: "Head of Marketingr",
    rating: "4.6",
  },
];
const TheReview = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    initialSlide: 1,
  };
  return (
    <div className="the-section-review">
      <div className="slider-container-list">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div className="slider-container">
                <img src={item.img} alt={item.title} />
                <div className="content">
                  <h3>{item.title}</h3>
                  <span>{item.desciptions}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TheReview;
