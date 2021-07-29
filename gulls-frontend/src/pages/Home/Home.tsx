import React, { FC, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Home.css";
import Swiper from "@components/Swiper/Swiper";
import NewCourse from "@components/NewCourse/NewCourse";
const Home: FC<{}> = () => {
  let history = useHistory();
  const userLogin = useCallback(() => {
    history.push("/login");
  }, []);
  const userReg = useCallback(() => {    
    history.push("/reg");
  }, []);
  const [search, setSearch] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className="home-container">
        <div className="header">
          <div className="header-left">
            <Image
              preview={false}
              width={147}
              height={70}
              src="http://47.105.96.139:8082/media/20191202214409zX.png"
            />
            <div className="header-search">
              <input value={search} onChange={onChange} placeholder="请输入关键字"></input>
              <div className="search-tag">
                <SearchOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="header-learn">
              <div >学习记录</div>
              <span style={{color: "#c8c9cc"}}>|</span><div>会员特权</div>
            </div>
            <div className="header-login">
              <div onClick={userLogin}>登录</div>|
              <div onClick={userReg}>注册</div>
            </div>
          </div>
        </div>
        <div className="home-nav">
          <div>网站首页</div>
          <div>职场提升</div>
          <div>编程与开发</div>
          <div>生活设计</div>
          <div>创意设计</div>
          <div>电商运营</div>
          <div>付费阅读</div>
          <div>在线购物</div>
          <div>联系我们</div>
        </div>
        <Swiper></Swiper>
        <div style={{fontSize: 14,marginLeft: 120,marginTop: 30, color: "gray"}}>网站公告:</div>
        <NewCourse></NewCourse>
      </div>
    </>
  );
};
export default Home;
