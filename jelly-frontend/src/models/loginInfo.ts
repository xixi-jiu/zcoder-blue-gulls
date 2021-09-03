export interface LoginInfo {
  id?: string; 
  username: string; // 用户名
  email?: string; // 邮箱
  head: string; // 头像
  money: number; // 余额
  integral: number; // 积分
  M_vip: number; // 是否是Vip（1: 是；0：不是）
  token?: string; // 令牌
}

// 默认值初始化
export const initLogin = (): LoginInfo => ({
  head: "",
  username: "游客",
  money: 0,
  integral: 0, 
  M_vip: 0,
});
