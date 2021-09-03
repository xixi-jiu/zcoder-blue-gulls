import React, { FC, useState, useCallback } from "react";
import "./Banner.css";
import { useHistory } from "react-router-dom";
import { Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const Banner: FC<{}> = () => {
  const [search, setSearch] = useState();
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }, []);
  const history = useHistory();
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Image
            preview={false}
            width={147}
            height={70}
            src={require("@assets/images/logo.png")}
          />
          <div className="header-search">
            <input
              value={search}
              onChange={onChange}
              placeholder="请输入关键字"
            ></input>
            <div className="search-tag">
              <SearchOutlined style={{ fontSize: 20 }} />
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-learn">
            <div>学习记录</div>
            <span style={{ color: "#c8c9cc" }}>|</span>
            <div>会员特权</div>
          </div>
          <div className="header-login">
            <div onClick={() => history.push("/login")}>登录</div>|
            <div onClick={() => history.push("/register")}>注册</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
