import React, { lazy } from "react";
import { useRoutes, RouteObject } from "react-router-dom";

import LazyLoad from "./utils/lazyLoad";

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: LazyLoad(lazy(() => import("@/pages/Home"))),
  },
  {
    path: "/page",
    element: LazyLoad(lazy(() => import("@/pages/Editor"))),
  },
];

const Router = () => {
  return useRoutes(rootRouter);
};

export default Router;
