import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images/review/review1.png";
import img2 from "../../../assets/images/review/review2.png";
import img3 from "../../../assets/images/review/review3.png";
import av1 from "../../../assets/images/review/avatar1.png";
import av2 from "../../../assets/images/review/avatar2.jpg";
import av3 from "../../../assets/icon/avatar-contact.png";
import { Avatar } from "antd";
import TheBreadcrumb from "../../../components/TheBreadcrumb";
import TitleBanner from "../../../components/TitleBanner";
const data = [
  {
    img: img1,
    title: "Best! I got the house I wanted through Hounter",
    desciptions:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    avatar: av1,
    name: "Dianne Russell",
    role: "Manager Director",
    rating: "4.6",
  },
  {
    img: img2,
    title: "My house sold out fast!",
    desciptions:
      "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
    avatar: av2,
    name: "Courtney Henry",
    role: "CEO Andarafish",
    rating: "4.3",
  },
  {
    img: img3,
    title: "Through the Hounter, I can get a house for my self",
    desciptions:
      "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
    avatar: av3,
    name: "Esther Howard",
    role: "Head of Marketingr",
    rating: "4.6",
  },
];
const TheReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    initialSlide: 1,
  };
  return (
    <div className="the-section-review container">
      <TheBreadcrumb title={"See Our Review"} />
      <TitleBanner title="What Our User say About Us" />
      <div className="slider-container-list">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div className="slider-container">
                <img src={item.img} alt={item.title} />
                <div className="content">
                  <h3>{item.title}</h3>
                  <span>{item.desciptions}</span>
                  <div className="content-bottom">
                    <div className="content-bottom-user">
                      <Avatar
                        src={item.avatar}
                        style={{ width: 56, height: 56 }}
                      />
                      <div>
                        <h3>{item.name}</h3>
                        <h4>{item.role}</h4>
                      </div>
                    </div>
                    <div className="content-bottom-start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z"
                          fill="#F59E0B"
                        />
                      </svg>
                      <span>{item.rating}</span>
                    </div>
                  </div>
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
