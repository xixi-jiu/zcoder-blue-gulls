import { http } from "../utils/index";

// 用户登陆
export function login(param: { email: string; password: string }) {
  return http.post("/napi/member/login", {
    ...param,
  });
}

// 用户注册
export function reg(param: { email: string; password: string, username: string }) {
  return http.post("/napi/member/reg", {
    ...param,
  });
}
