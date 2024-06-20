import { Skeleton } from "antd";
import React from "react";

const SkeletonPopular = () => {
  return (
    <>
      <div className="popular-section-menu" style={{ marginBottom: 40 }}>
        <Skeleton.Button style={{ height: "70px", width: "293px" }} active />
        <div className="popular-section-menu-tabs">
          <Skeleton.Button style={{ height: "70px", width: "135px" }} active />
          <Skeleton.Button style={{ height: "70px", width: "135px" }} active />
          <Skeleton.Button style={{ height: "70px", width: "135px" }} active />
        </div>
        <Skeleton.Button style={{ height: "70px", width: "135px" }} active />
      </div>
      <div className="d-flex justify-content-between">
        <div className="popular-section-slide-item">
          <div className="popular-section-slide-item-img">
            <Skeleton.Button
              style={{ height: "382px", width: "340px" }}
              active
            />
          </div>
          <div className="popular-section-slide-item-content">
            <Skeleton style={{ height: "140px", width: "150px" }} active />
          </div>
        </div>
        <div className="popular-section-slide-item">
          <div className="popular-section-slide-item-img">
            <Skeleton.Button
              style={{ height: "382px", width: "340px" }}
              active
            />
          </div>
          <div className="popular-section-slide-item-content">
            <Skeleton style={{ height: "140px", width: "150px" }} active />
          </div>
        </div>
        <div className="popular-section-slide-item">
          <div className="popular-section-slide-item-img">
            <Skeleton.Button
              style={{ height: "382px", width: "340px" }}
              active
            />
          </div>
          <div className="popular-section-slide-item-content">
            <Skeleton style={{ height: "140px", width: "150px" }} active />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonPopular;
