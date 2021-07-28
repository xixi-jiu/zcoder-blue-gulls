import React, { FC } from "react";
import { Image } from "antd";
const Home: FC<{}> = () => {
  return (
    <>
      <div className="home-container">
        <div className="header">
          <Image
            width={120}
            height={57}
            src="http://47.105.96.139:8082/media/20191202214409zX.png"
          />
          <div className="header-login">
            登陆 | 注册
          </div>
        </div>
        <div className="home-nav"></div>
      </div>
    </>
  );
};
export default Home;
