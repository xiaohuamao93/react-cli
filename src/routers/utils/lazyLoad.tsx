import React, { Suspense, ReactNode } from "react";

const LazyLoad = (Compontent: React.LazyExoticComponent<any>): ReactNode => (
  <Suspense fallback={<div>加载中...</div>}>
    <Compontent />
  </Suspense>
);

export default LazyLoad;
