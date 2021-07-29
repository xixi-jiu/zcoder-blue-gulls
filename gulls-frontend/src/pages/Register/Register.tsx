import React, { FC, useCallback, Suspense } from "react";
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from "antd";
import { Spin, message } from "antd";
import "./Register.css";
import { userApi } from '@api/index';
// 登陆表单
type regForm = {
  email: string, 
  password: string, 
  username: string, 
  agpassword: string, 
  M_code: string, 
  uid: string, 
}
const Register: FC<{}> = () => {
  let history = useHistory();
  const onFinish = useCallback((form: regForm) => {
    form.M_code = "1";
    form.uid = "1";
    console.log(form);
    userApi.reg(form).then((res: any) => {
      console.log(res);
      if (res.code === 0) {
        message.success(res.msg);
        history.replace("/login");
      } else {
        message.warning(res.msg);
      }
    }).catch(err => {
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
                <img src={require("./../../assets/images/title.png")} alt="" />
              </div>
              <div className="title-tag">会员注册</div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "请输入登陆账号!" }]}
                >
                  <Input placeholder="登陆账号" className="login-input" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ type: 'email', message: "邮箱格式不正确！"}]}
                >
                  <Input placeholder="电子邮箱" className="login-input" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ type: 'string', min: 6, max: 16, required: true, message: "请输入 6 至 16 个字符!" }]}
                >
                  <Input
                    className="login-input"
                    type="password"
                    placeholder="设置密码"
                  />
                </Form.Item>
                <Form.Item
                  name="agpassword"
                  rules={[
                    {
                      required: true,
                      message: '请再次输入密码！',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('两次密码不一致!'));
                      },
                    }),
                  ]}
                >
                  <Input
                    className="login-input"
                    type="password"
                    placeholder="密码确认"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    注册
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

export default Register;
