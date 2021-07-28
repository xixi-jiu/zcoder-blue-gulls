import React, { FC,Suspense } from "react";
import { Route, Switch, RouteProps } from "react-router";
import { Spin } from 'antd';
import NotFound from '@pages/NotFound/NotFound';
const Home = React.lazy(() => import("@pages/Home/Home"));
const Login = React.lazy(() => import("@pages/Login/Login"));


// 定义路由集合
export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
];


// 定义路由组件
const Routes:FC = ()=>{
    // 在这里拿到 token, 判断token是否有效
    return (
        <Suspense fallback={<Spin />}>
            <Switch>
                {
                    routes.map((r,index)=>{
                        const {path,exact,component} = r;
                        const LazyCom = component;
                        return (
                            <Route
                                key={index}
                                path={path}
                                exact={exact}
                                render={
                                    (props)=><LazyCom {...props} />
                                }
                             />
                        )
                    })
                }
                {/* 兜底的路由 */}
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    )
}

export default Routes;