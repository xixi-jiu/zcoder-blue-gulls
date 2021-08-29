import React, { FC, useCallback, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, message, Spin } from "antd";
import "./Login.css";
import { userApi } from "@api/index";
import { storage } from "@utils/index";
// 登陆表单
type loginForm = {
  email: string;
  password: string;
};
const Login: FC<{}> = () => {
  let history = useHistory();
  const onFinish = useCallback((form: loginForm) => {
    userApi
      .login(form)
      .then((res: any) => {
        if (res.code === 0) {
          storage.set("userInfo", res.data);
          message.success("登陆成功！");
          history.replace("/");
        } else {
          message.warning("用户名或密码错误");
        }
      })
      .catch((err) => {
        message.error(err);
      });
  }, []);
  return (
    <>
      <Suspense fallback={Spin}>
        <div className="page-login">
          <div className="login-board">
            <div className="board-title">
              <div className="title-img">
                <img src={require("./../../assets/images/logo.png")} alt="" />
              </div>
              <div className="title-tag">会员登陆</div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
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
