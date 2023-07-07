import { Spin } from "antd";
import { Suspense } from "react";

const lazyload = function (children) {
  // return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default lazyload;
