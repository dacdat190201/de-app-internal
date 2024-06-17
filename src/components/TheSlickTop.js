import { Avatar } from "antd";
import React from "react";

const TheSlickTop = () => {
  return (
    <div className="custom-slick-slider">
      <div className="custom-slick-slider-item">
        <div className="custom-slick-slider-list-avatar">
          <Avatar.Group>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
            </a>
            <Avatar
              style={{
                backgroundColor: "#87d068",
              }}
            />
          </Avatar.Group>
        </div>
        <div className="custom-slick-slider-item-title">
          1K+ Prople
          <span>Suscessfully Getting Home</span>
        </div>
      </div>
      <div className="custom-slick-slider-item">
        <div className="custom-slick-slider-list-avatar">
          <Avatar.Group>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
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
    </div>
  );
};

export default TheSlickTop;
