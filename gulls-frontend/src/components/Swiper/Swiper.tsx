import React, { FC } from "react";
import { Image } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./Swiper.css";
const Swiper: FC<{}> = () => {
  return (
    <>
      <div className="container">
        <div className="swiper">
          <img src={require("@assets/images/swiperBg.png")}></img>
        </div>
        <div className="shadow">
          <div className="item">
            <div>职场提升</div>
            <RightOutlined />
          </div>
          <div className="item">
            <div>编程与开发</div>
            <RightOutlined />
          </div>
          <div className="item">
            <div>生活兴趣</div>
            <RightOutlined />
          </div>
          <div className="item">
            <div>创意设计</div>
            <RightOutlined />
          </div>
          <div className="item">
            <div>电商运营</div>
            <RightOutlined />
          </div>
        </div>
      </div>
    </>
  );
};
export default Swiper;
