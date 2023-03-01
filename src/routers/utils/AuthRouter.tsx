import { useLocation } from "react-router-dom";
import { rootRouter } from "..";
import { searchRoute } from "@/utils";

const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  const route = searchRoute(pathname, rootRouter);

  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route.meta?.requiresAuth) return props.children;
};

export default AuthRouter;
