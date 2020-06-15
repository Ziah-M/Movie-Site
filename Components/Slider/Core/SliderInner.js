import React from "react";

const styleSliderInner = (spaceBetween, speedSlide, x) => ({
  whiteSpace: "nowrap",
  transition: `transform ${speedSlide}ms cubic-bezier(0.5, 0, 0.1, 1)`,
  transform: `translate3d(${x}px, 0, 0)`,
  backfaceVisibility: "hidden",
  overflowX: "visible",
  margin: `${0 - spaceBetween}px`
});

const SliderInner = ({ spaceBetween, speedSlide, x, children }) => {
  return (
    <div style={styleSliderInner(spaceBetween, speedSlide, x)}>{children}</div>
  );
};

export default SliderInner;
