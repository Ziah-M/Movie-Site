import React from "react";

const styleSliderHandleDefault = disabled => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  transition: "background-color 200ms ease",
  color: `rgba(255, 255, 255, 1) ${disabled ? "transparent" : ""}`,
  width: " 100%",
  height: "100%",
  pointerEvents: `${disabled ? "none" : "auto"}`,
  backgroundColor: `${disabled ? "transparent" : ""}`
});

const SliderHandleDefault = ({ disabled, children }) => {
  return <div style={styleSliderHandleDefault(disabled)}>{children}</div>;
};
export default SliderHandleDefault;
