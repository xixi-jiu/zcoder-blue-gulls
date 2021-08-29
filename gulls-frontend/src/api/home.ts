import { http } from '@utils/index';


// 1.获取最新上架课程信息
export function getNewCourse() {
  return http.get("/api/home/newCourse");
}

// 2.获取导航栏信息
export function getNav() {
  return http.get("/api/home/nav");
}