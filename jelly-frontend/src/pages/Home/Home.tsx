import React, { FC, useState, useCallback, useEffect } from "react";
import "./Home.css";

import Banner from "@components/Banner/Banner";
import Swiper from "@components/Swiper/Swiper";
import NewCourse from "@components/NewCourse/NewCourse";
import { homeApi } from "@api/index";
const Home: FC<{}> = () => {
  const [nav, setNav] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await homeApi.getNav();
      setNav(res.data);
    })();
  }, []);
  const handleLink = useCallback(
    (index: number, type: string, typeid: number) => {
      console.log("准备跳转", type, typeid);
      setCur(index);
    },
    []
  );
  const [cur, setCur] = useState(0);
  const changeNav = useCallback(
    (index) => {
      console.log(index);
      return index === cur ? "active" : "";
    },
    [cur]
  );
  return (
    <>
      {/* 头部 */}
      <Banner />
      <div className="home-container">
        <div className="home-nav">
          {nav.map((item, index) => {
            return (
              <div
                className={changeNav(index)}
                onClick={() => handleLink(index, item.type, item.typeid)}
                key={index}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        {/* 轮播图 */}
        <Swiper></Swiper>
        <div
          style={{
            fontSize: 14,
            marginLeft: 120,
            marginTop: 30,
            color: "gray",
          }}
        >
          网站公告:
        </div>
        {/* 最新课程 */}
        <NewCourse></NewCourse>
      </div>
    </>
  );
};
export default Home;
