import React from "react";
import TheBreadcrumb from "../../../components/TheBreadcrumb";
import { renderAttributes } from "../../../components/compo";
import { Avatar } from "antd";
import avatar from "./../../../assets/icon/avatar-contact.png";
const TheSeeHouse = () => {
  const dataIcon = [
    { product_attribute_type: 3, value: 4 },
    { product_attribute_type: 2, value: 2 },
    { product_attribute_type: 1, value: 2 },
    { product_attribute_type: 5, value: 956 },
  ];
  return (
    <div className="the-see-house-page">
      <div className="container">
        <TheBreadcrumb title={"Ready To Sell!"} />
        <div className="the-see-house-section-page">
          <div className="the-see-house-section-left">
            <div className="the-see-house-section-left-info">
              <div className="title">Let’s tour and see our house!</div>
              <span>
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </span>
              <p>House Detail</p>
              <div className="product_attribute">
                {dataIcon.map((item) => {
                  return <div>{renderAttributes(item)}</div>;
                })}
              </div>
            </div>
            <hr></hr>
            <div className="the-see-house-section-left-contact">
              <div className="info">
                <Avatar src={avatar} style={{ width: 56, height: 56 }} />
                <div className="sub-info">
                  Dianne Russell
                  <span>Manager Director</span>
                </div>
              </div>
              <div className="button">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.38439 0.479124C4.90949 0.320805 5.47298 0.347107 5.98104 0.553653C6.48911 0.760198 6.91111 1.13453 7.1768 1.61432L7.26679 1.79312L8.05999 3.55832C8.30108 4.0941 8.37934 4.68894 8.28504 5.26885C8.19074 5.84875 7.92803 6.38814 7.52959 6.81992L7.37119 6.97832L6.11839 8.14592C5.89279 8.35952 6.06199 9.18632 6.87919 10.5999C7.61239 11.8719 8.21119 12.4659 8.50399 12.4983H8.5556L8.61919 12.4863L11.0792 11.7339C11.4098 11.6325 11.7626 11.6285 12.0955 11.7224C12.4283 11.8162 12.7271 12.004 12.956 12.2631L13.0664 12.4011L14.6936 14.6571C15.0129 15.0992 15.1721 15.6368 15.1451 16.1814C15.118 16.7261 14.9063 17.2453 14.5448 17.6535L14.3984 17.8047L13.7468 18.4215C13.1627 18.9746 12.4322 19.3484 11.6419 19.4984C10.8516 19.6483 10.0349 19.5682 9.28879 19.2675C6.96679 18.3315 4.85719 16.1931 2.94079 12.8739C1.02079 9.54632 0.222795 6.64592 0.579195 4.16192C0.687148 3.41091 0.996527 2.70316 1.47446 2.11388C1.9524 1.52459 2.58104 1.07578 3.2936 0.815124L3.52519 0.738324L4.38439 0.479124Z"
                    fill="white"
                  />
                </svg>
                Contact Now
              </div>
            </div>
          </div>
          <div className="the-see-house-section-right">
            <TheBreadcrumb title={"Ready To Sell!"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSeeHouse;
