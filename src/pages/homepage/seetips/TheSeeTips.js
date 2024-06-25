import React from "react";
import TheBreadcrumb from "../../../components/TheBreadcrumb";
import TitleBanner from "../../../components/TitleBanner";
import post0 from "../../../assets/images/post/post0.png";
import post1 from "../../../assets/images/post/post1.png";
import post2 from "../../../assets/images/post/post2.png";
import post3 from "../../../assets/images/post/post3.png";
import av1 from "../../../assets/images/review/avatar1.png";
import av2 from "../../../assets/images/review/avatar2.jpg";
import av3 from "../../../assets/icon/avatar-contact.png";
import { Avatar } from "antd";
const data = [
  {
    cover: post0,
    user: { image: av1, name: "Cameron Williamson" },
    PostName: "12 Things to know before buying a house",
    descriptions:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    lastTime: "25 Apr 2021",
  },
  {
    cover: post1,
    user: { image: av2, name: "Dianne Russell" },
    PostName: "The things we need to check when we want to buy a house",
    descriptions:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    lastTime: "25 Apr 2021",
  },
  {
    cover: post2,
    user: { image: av3, name: "Courtney Henry" },
    PostName: "7 Ways to distinguish the quality of the house we want to buy",
    descriptions:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    lastTime: "25 Apr 2021",
  },
  {
    cover: post3,
    user: { image: av1, name: "Darlene Robertson" },
    PostName: "The best way to know the quality of the house we want to buy",
    descriptions:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    lastTime: "25 Apr 2021",
  },
];
const TheSeeTips = () => {
  return (
    <div className="seetips-section ">
      <div className="container">
        <TheBreadcrumb title={"See Tips And trock From Our Partnership"} />
        <TitleBanner title="Find Out More About Selling And Buying Homes" />
        <div className="d-flex">
          <button className="btn">More Artikel</button>
        </div>
        <div className="seetips-section-content">
          <div className="seetips-section-content-left">
            {data.slice(1, 4).map((item) => {
              return (
                <div className="seetips-section-content-left-item">
                  <div className="seetips-section-content-left-item-img">
                    <img src={item.cover} alt={item.title} />
                  </div>
                  <div className="seetips-section-content-left-user">
                    <div className="seetips-section-content-left-item-info">
                      <Avatar
                        src={item.user.image}
                        style={{ width: 32, height: 32 }}
                      />
                      <span>{item.user.name}</span>
                    </div>
                    <span>{item.PostName}</span>
                    <div className="seetips-section-content-left-item-bottom">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z"
                          fill="#888B97"
                        />
                      </svg>
                      {item.lastTime}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="seetips-section-content-right">
            <div className="seetips-section-content-right-img">
              <img src={data[0].cover} alt="abt" />
            </div>
            <div className="seetips-section-content-right-content">
              <div className="seetips-section-content-right-content-user">
                <Avatar
                  src={data[0].user.image}
                  style={{ width: 32, height: 32 }}
                />
                <span>{data[0].user.name}</span>
              </div>
              <div>
                <h4>{data[0].PostName}</h4>
              </div>
              <span>{data[0].descriptions}</span>
              <div className="seetips-section-content-right-item-bottom">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z"
                    fill="#888B97"
                  />
                </svg>
                {data[0].lastTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSeeTips;
