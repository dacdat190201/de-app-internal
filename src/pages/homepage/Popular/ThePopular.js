import React, { useEffect, useRef, useState } from "react";
import TheBreadcrumb from "../../../components/TheBreadcrumb";
import TitleBanner from "../../../components/TitleBanner";
import { NextArrow, PrevArrow } from "../../../components/compo";
import requestApi from "../../../helpers/apiHelper";
import SlidePopular from "./SlidePopular";
import SkeletonPopular from "../../../components/skeleton/SkeletonPopular";

const ThePopular = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [categoriesId, setCategoriesId] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [itemSlide, setItemSlide] = useState([]);
  const renderSVG = (item) => {
    switch (item.name) {
      case "House":
        return (
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8.83189V17.5C17.9998 17.7719 17.9262 18.0386 17.7868 18.272C17.6475 18.5054 17.4476 18.6968 17.2084 18.8259C16.9916 18.9432 16.7485 19.0031 16.5021 18.9999H11.9967C11.7978 18.9999 11.607 18.9209 11.4664 18.7803C11.3257 18.6396 11.2467 18.4488 11.2467 18.2499V13.7493C11.2467 13.5504 11.1677 13.3596 11.0271 13.2189C10.8864 13.0783 10.6956 12.9993 10.4967 12.9993H7.49673C7.29781 12.9993 7.10705 13.0783 6.9664 13.2189C6.82574 13.3596 6.74673 13.5504 6.74673 13.7493V18.2499C6.74673 18.4488 6.66771 18.6396 6.52706 18.7803C6.3864 18.9209 6.19564 18.9999 5.99673 18.9999H1.5002C1.28754 19.0005 1.07723 18.9556 0.883354 18.8682C0.689475 18.7808 0.516507 18.653 0.37604 18.4934C0.12946 18.2082 -0.00428751 17.8427 8.829e-06 17.4657V8.8318C0.000172265 8.62281 0.0439196 8.41615 0.128457 8.22503C0.212994 8.0339 0.336463 7.86251 0.490978 7.7218L7.99032 0.903078C8.26579 0.650753 8.62579 0.510777 8.99936 0.510742C9.37293 0.510707 9.73296 0.650617 10.0085 0.90289L17.5091 7.72189C17.6636 7.86263 17.787 8.03403 17.8716 8.22515C17.9561 8.41627 17.9998 8.62292 18 8.83189Z"
              fill="#888B97"
            />
          </svg>
        );
      case "Villa":
        return (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 17.9999H1C0.45 17.9999 0 17.5499 0 16.9999V5.68994C0 5.26994 0.25 4.89994 0.64 4.74994L11.64 0.519938C11.7921 0.46126 11.9561 0.440637 12.118 0.459864C12.2798 0.47909 12.4345 0.537584 12.5686 0.630254C12.7027 0.722923 12.8121 0.846959 12.8873 0.991563C12.9624 1.13617 13.0012 1.29696 13 1.45994V6.99994H5C4.45 6.99994 4 7.44994 4 7.99994V17.9999ZM14 8.99994H7C6.45 8.99994 6 9.44994 6 9.99994V16.9999C6 17.5499 6.45 17.9999 7 17.9999H11V13.9999C11 13.4499 11.45 12.9999 12 12.9999C12.55 12.9999 13 13.4499 13 13.9999V17.9999H17C17.55 17.9999 18 17.5499 18 16.9999V8.99994C18 7.89994 17.1 6.99994 16 6.99994C14.9 6.99994 14 7.89994 14 8.99994Z"
              fill="#888B97"
            />
          </svg>
        );
      case "Apartment":
        return (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8V2C14 0.9 13.1 0 12 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V16C0 17.1 0.9 18 2 18H8V14H10V18H16C17.1 18 18 17.1 18 16V10C18 8.9 17.1 8 16 8H14ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM12 12H10V10H12V12ZM12 8H10V6H12V8ZM12 4H10V2H12V4ZM16 16H14V14H16V16ZM16 12H14V10H16V12Z"
              fill="#888B97"
            />
          </svg>
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    setLoading(true);
    requestApi("/categories", "GET")
      .then((response) => {
        if (response.data.isSuccess) {
          let data = response.data.data;
          setCategories(data);
          setCategoriesId(data[0].id);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickMenu = (index, item) => {
    setIsActive(index);
    setCategoriesId(item.id);
  };
  const nextSlide = () => {
    if (currentSlide < itemSlide.length - 1) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="popular-section">
      <div className="container">
        {loading ? (
          <SkeletonPopular />
        ) : (
          <>
            <TheBreadcrumb title={"Our Recommendation"} />
            <div>
              <div className="popular-section-menu">
                <TitleBanner title="Featured House" />
                <div className="popular-section-menu-tabs">
                  {categories.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`popular-section-menu-tabs-item ${
                          isActive === index ? "active" : ""
                        }`}
                        onClick={() => handleClickMenu(index, item)}
                      >
                        <span>{renderSVG(item)}</span>
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="popular-section-menu-arrow-btn">
                  <NextArrow onClick={prevSlide} isFirst={currentSlide === 0} />
                  <PrevArrow
                    onClick={nextSlide}
                    isLast={currentSlide === itemSlide.length - 1}
                  />
                </div>
              </div>
              <SlidePopular
                categoriesId={categoriesId}
                setCurrentSlide={setCurrentSlide}
                setItemSlide={setItemSlide}
                sliderRef={sliderRef}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThePopular;
