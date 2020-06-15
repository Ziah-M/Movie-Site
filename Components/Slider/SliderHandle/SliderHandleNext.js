import React from "react";

// NEEDS TO ALSO INHERIT ALL STYLES FROM SLIDEHANDLE PARENT
const styleSliderHandleNext = (spaceBetween, backgroundColor, width) => ({
  //slider handle properties
  position: "absolute",
  top: 0,
  bottom: 0,
  width: `${width}px`,
  cursor: "pointer",
  zIndex: 1,
  //slider handle next properties
  right: 0,
  marginRight: `${spaceBetween * 2}px`,
  backgroundImage: `linear-gradient(
      to left,
      transparent,
      ${backgroundColor}
    )`
});

const SliderHandleNext = ({
  spaceBetween,
  backgroundColor,
  children,
  width,
  goToNext
}) => {
  return (
    <div
      onClick={() => goToNext()}
      style={styleSliderHandleNext(spaceBetween, backgroundColor, width)}
    >
      {children}
    </div>
  );
};

export default SliderHandleNext;
