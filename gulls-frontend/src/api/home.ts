import { http } from '@utils/index';


// 获取最新上架课程信息
export function getNewsCourse(param: {}) {
  return http.post("/napi/index/newc", {
    ...param,
  });
}
