// 导入库
import { lazy } from "react";

// 路由懒加载
import lazyload from "./lazyload";

// 导入组件
const Login = lazy(() => import("../pages/login"));

// 集中式路由
const routes = [{ path: "/login", element: lazyload(<Login />) }];

export default routes;
