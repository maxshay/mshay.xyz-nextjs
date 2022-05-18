import React from "react";

const Custom404 = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center align-middle text-white">
      <div className="flex">
        <h1
          className="text-xl inline-block border-r border-white mr-8"
          style={{ padding: "10px 23px 10px 0" }}
        >
          404
        </h1>
        <div
          className="inline-block text-left align-middle"
          style={{ lineHeight: "49px", height: "49px" }}
        >
          <h2 className="text-md m-0 p-0 " style={{ lineHeight: "inherit" }}>
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
