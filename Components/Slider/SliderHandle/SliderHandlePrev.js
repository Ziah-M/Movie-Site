import React from "react";

// NEEDS TO ALSO INHERIT ALL STYLES FROM SLIDEHANDLE PARENT
const styleSliderHandlePrev = (spaceBetween, backgroundColor, width) => ({
  //slider handle properties
  position: "absolute",
  top: 0,
  bottom: 0,
  width: `${width}px`,
  cursor: "pointer",
  zIndex: 1,
  //slider handle prev properties
  left: 0,
  marginLeft: `${spaceBetween * 2}px`,
  backgroundImage: `linear-gradient(
      to left,
      transparent,
      ${backgroundColor}
    )`
});

const SliderHandlePrev = ({
  spaceBetween,
  backgroundColor,
  children,
  width,
  goToPrev = () => {}
}) => {
  return (
    <div
      onClick={goToPrev}
      style={styleSliderHandlePrev(spaceBetween, backgroundColor, width)}
    >
      {children}
    </div>
  );
};

export default SliderHandlePrev;
