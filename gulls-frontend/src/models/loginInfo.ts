export interface LoginInfo {
  id?: string; 
  username: string; // 用户名
  email?: string; // 邮箱
  avatar: string; // 头像
  money: number; // 余额
  score: number; // 积分
  isVip: number; // 是否是Vip（1: 是；0：不是）
  token?: string; // 令牌
}

// 默认值初始化
export const initLogin = (): LoginInfo => ({
  avatar: "",
  username: "游客",
  money: 0,
  score: 0, 
  isVip: 0,
});
