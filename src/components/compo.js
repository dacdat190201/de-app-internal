import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const NextArrow = ({ onClick, isFirst }) => {
  return (
    <div className={`arrow-btn ${isFirst ? "" : "active"}`} onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

export const PrevArrow = ({ onClick, isLast }) => {
  return (
    <div className={`arrow-btn ${isLast ? "" : "active"}`} onClick={onClick}>
      <RightOutlined />
    </div>
  );
};
