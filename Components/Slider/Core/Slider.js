import React, { useRef } from "react";

const styleSlider = navPadding => ({
  position: "relative",
  width: "100%",
  maxWidth: "100%",
  padding: `${navPadding}px`
});

const Slider = ({ navPadding, children }) => {
  return <div style={styleSlider(navPadding)}>{children}</div>;
};

export default Slider;
