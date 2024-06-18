import { Avatar } from "antd";
import React, { useRef, useState } from "react";
import home1 from "../../assets/slick/Rectangle 23.png";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const NextArrow = ({ onClick, isFirst }) => {
  return (
    <div className={`arrow-btn ${isFirst ? "" : "active"}`} onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

const PrevArrow = ({ onClick, isLast }) => {
  return (
    <div className={`arrow-btn ${isLast ? "" : "active"}`} onClick={onClick}>
      <RightOutlined />
    </div>
  );
};
const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const itemCount = 4;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  const nextSlide = () => {
    if (currentSlide < itemCount - 1) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <>
      <div className="custom-slick-slider">
        <Slider ref={sliderRef} {...settings}>
          <div className="custom-slick-slider-item">
            <div className="custom-slick-slider-list-avatar">
              <Avatar.Group>
                <Avatar
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                  size="large"
                />
                <a href="https://ant.design">
                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                    }}
                    size="large"
                  >
                    K
                  </Avatar>
                </a>
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  size="large"
                />
              </Avatar.Group>
            </div>
            <div className="custom-slick-slider-item-title">
              1K+ People
              <span>Successfully Getting Home</span>
            </div>
          </div>
          <div className="custom-slick-slider-item">
            <div className="custom-slick-slider-list-avatar">
              <Avatar.Group>
                <Avatar src={home1} size="large" />
              </Avatar.Group>
            </div>
            <div className="custom-slick-slider-item-title">
              56 Houses
              <span>Sold Monthly</span>
            </div>
          </div>
          <div className="custom-slick-slider-item">
            <div className="custom-slick-slider-list-avatar">
              <Avatar.Group>
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              </Avatar.Group>
            </div>
            <div className="custom-slick-slider-item-title">
              4K+
              <span>People Looking for New Homes</span>
            </div>
          </div>
          <div className="custom-slick-slider-item">
            <div className="custom-slick-slider-list-avatar">
              <Avatar.Group>
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              </Avatar.Group>
            </div>
            <div className="custom-slick-slider-item-title">
              4K+
              <span>People Looking for New Homes</span>
            </div>
          </div>
        </Slider>
      </div>
      <div className="custom-arrow-btn">
        <NextArrow onClick={prevSlide} isFirst={currentSlide === 0} />
        <PrevArrow
          onClick={nextSlide}
          isLast={currentSlide === itemCount - 1}
        />
      </div>
    </>
  );
};

export default SlideShow;
