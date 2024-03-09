import React, { Component } from "react";

const Like = (props) => {
  const clsName = "fa fa-heart";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={props.liked === true ? clsName : clsName + "-o"}
      aria-hidden="true"
    />
  );
};

export default Like;
