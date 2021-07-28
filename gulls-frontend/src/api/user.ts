import { http } from "../utils/index";

// 用户登陆
export function login(param: { username: string; password: string }) {
  return http.post("/api/login", {
    ...param,
  });
}
