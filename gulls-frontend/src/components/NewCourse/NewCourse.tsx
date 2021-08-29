import React, { FC, useEffect, useState } from "react";

import "./NewCourse.css";
import { homeApi } from "@api/index";
const NewCourse: FC<{}> = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await homeApi.getNewCourse();
      setCourse(res.data);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">最新上架</div>
        <div className="content">
          {course.map((item, index) => {
            if (index < 5) {
              return (
                <div className="content-item" key={index}>
                  <div className="course-img">
                    <img src={"http://47.105.96.139:8082/" + item.pic}></img>
                  </div>
                  <div className="course-title">{item.title}</div>
                  <div className="course-info">
                    <div style={{ color: "#E9232C" }}>
                      ¥{parseInt(item.price)}
                    </div>
                    <div style={{ color: "gray" }}>{item.view}人学习</div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
export default NewCourse;
