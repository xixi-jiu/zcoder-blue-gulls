import React, { FC, useCallback, Suspense } from "react";
import { Form, Input, Button } from "antd";
import { Spin } from "antd";
import "./Login.css";
import { userApi } from '@api/index';
// 登陆表单
type loginForm = {
  username: string, 
  password: string, 
}
const Login: FC<{}> = () => {
  const onFinish = useCallback((form: loginForm) => {
    userApi.login(form);
  }, []);
  return (
    <>
      <Suspense fallback={Spin}>
        <div className="page-login">
          <div className="login-board">
            <div className="board-title">
              <div className="title-img">
                <img src={require("./../../assets/images/title.png")} alt="" />
              </div>
              <div className="title-tag">会员登陆</div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "请输入邮箱/账号!" }]}
                >
                  <Input placeholder="邮箱/账号" className="login-input" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "请输入密码!" }]}
                >
                  <Input
                    className="login-input"
                    type="password"
                    placeholder="密码"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    登陆
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Login;
