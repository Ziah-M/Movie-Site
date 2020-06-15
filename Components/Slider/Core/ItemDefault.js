import React from "react";

const styleItemDefault = {
  display: "flex",
  flex: 1,
  height: "200px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "40px",
  position: "relative",
  cursor: "pointer",
  userSelect: "none"
};

const ItemDefault = ({ children, style }) => {
  return <div style={{ ...styleItemDefault, ...style }}>{children}</div>;
};

export default ItemDefault;
