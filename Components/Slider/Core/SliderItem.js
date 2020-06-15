import React from "react";

const styleSliderItem = (speedMove, widthPercent, spaceBetween) => ({
  display: "inline-flex",
  position: "relative",
  whiteSpace: "normal",
  verticalAlign: "top",
  position: "relative",
  transition: `transform ${speedMove}ms cubic-bezier(0.5, 0, 0.1, 1),
      max-width ${speedMove}ms cubic-bezier(0.5, 0, 0.1, 1)`,
  width: "100%",
  maxWidth: `${widthPercent}%`,
  padding: `${spaceBetween}px`
});

// If scale property is used .. will apply a transform with the additional props
const styleSliderItemWithTransform = (
  translateLeft,
  translateRight,
  firstIsActive,
  lastIsActive,
  isActive,
  index,
  width,
  scaleActiveBy,
  isFirst,
  isLast,
  scale,
  spaceBetween
) => {
  if (!scale) return {};
  let transform = "";

  //logic for determining the CSS content of the transform property
  if (translateLeft) {
    if (firstIsActive) {
      transform += `
      transform: translate3d(0, 0, 0);
      `;
    } else if (lastIsActive) {
      transform += `
      transform: translate3d(-${width * (scaleActiveBy - 1)}px, 0, 0);
      `;
    } else {
      transform += `
      transform: translate3d(-${(width * (scaleActiveBy - 1)) / 2}px, 0, 0);
      `;
    }
  }
  if (translateRight) {
    if (lastIsActive) {
      transform += `
      transform: translate3d(0, 0, 0);
      `;
    } else if (firstIsActive) {
      transform += `
        transform: translate3d(${width * (scaleActiveBy - 1)}px, 0, 0);
        `;
    } else {
      transform += `
        transform: translate3d(${(width * (scaleActiveBy - 1)) / 2}px, 0, 0);
      `;
    }
  }
  if (isActive) {
    transform += `
      transform: scale(${scaleActiveBy + spaceBetween / width});
      z-index: 1;
    `;
  }
  if (isFirst) {
    transform += `
      transform-origin: center left;
    `;
  }
  if (isLast) {
    transform += `
      transform-origin: center right;
    `;
  }

  return { transform };
};

const SliderItem = ({
  children,
  speedMove,
  widthPercent,
  spaceBetween,
  translateLeft,
  translateRight,
  firstIsActive,
  lastIsActive,
  isActive,
  index,
  width,
  scaleActiveBy,
  isFirst,
  isLast,
  scale
}) => {
  return (
    <div
      style={{
        ...styleSliderItem(speedMove, widthPercent, spaceBetween),
        ...styleSliderItemWithTransform(
          translateLeft,
          translateRight,
          firstIsActive,
          lastIsActive,
          isActive,
          index,
          width,
          scaleActiveBy,
          isFirst,
          isLast,
          scale,
          spaceBetween
        )
      }}
    >
      {children}
    </div>
  );
};

export default SliderItem;
