import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import requestApi from "../../../helpers/apiHelper";
import { API_IMG, renderProductAttributes } from "../../../components/compo";
import { Empty } from "antd";

const SlidePopular = ({
  categoriesId,
  setCurrentSlide,
  sliderRef,
  setItemSlide,
}) => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    requestApi(`/categories/${categoriesId}`)
      .then((response) => {
        if (response.data.isSuccess) {
          let data = response.data.data;
          setDataProducts(data);
          setItemSlide(data);
          // const attributes = data.map((item) => item.product_attributes);
          // setProductAttribute(attributes);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesId]);

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

  return (
    <>
      {dataProducts.length === 0 ? (
        <Empty style={{ marginTop: 120 }} />
      ) : (
        <div className="popular-section-slide">
          <Slider ref={sliderRef} {...settings}>
            {dataProducts.map((item, index) => (
              <div className="popular-section-slide-item">
                <div className="popular-section-slide-item-img">
                  <img src={`${API_IMG}${item.cover}`} alt={item.name} />
                </div>
                <div className="popular-section-slide-item-content">
                  <div className="popular-section-slide-item-title">
                    {item.name}
                  </div>
                  <span>$ {item.price}</span>
                </div>
                <div className="popular-section-slide-item-icon">
                  {renderProductAttributes(item.product_attributes)}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default SlidePopular;
