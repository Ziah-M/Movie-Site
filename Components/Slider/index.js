import React, { useState, useRef, useEffect, useCallback } from "react";
import useEventListener from "../../Hooks/useEventListener.js";
import { Slider, SliderInner, SliderItem, ItemDefault } from "./Core";
import {
  SliderHandlePrev,
  SliderHandleNext,
  SliderHandleDefault
} from "./SliderHandle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const SlideIt = ({
  hoverTimeout = 500,
  items = [],
  itemsPerSlide = 8,
  itemProps = () => ({}),
  scale = true,
  scaleActiveBy = 1.2,
  navPadding = 80,
  spaceBetween = 4,
  speedSlide = 900,
  speedMove = 250,
  backgroundColor = "black",
  renderItem: SliderItemInner = ({
    // RENDER PROP --> aliased
    item: { color },
    index,
    updateActive,
    removeActive,
    ...rest
  }) => (
    <ItemDefault // DEFAULT FOR THIS RANDOM PROP
      onMouseEnter={updateActive}
      onMouseLeave={removeActive}
      style={{
        backgroundColor: color
      }}
    >
      <div>{index}</div>
    </ItemDefault>
  ),
  renderHandlePrev: SliderHandlePrevInner = (
    { goToPrev, ...rest } // RENDER PROP --> aliased
  ) => {
    return (
      <SliderHandleDefault {...rest}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </SliderHandleDefault>
    );
  },
  renderHandleNext: SliderHandleNextInner = (
    { goToNext, ...rest } // RENDER PROP --> aliased
  ) => (
    <SliderHandleDefault {...rest}>
      <FontAwesomeIcon icon={faChevronRight} />
    </SliderHandleDefault>
  )
}) => {
  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(null);

  const sliderInnerRef = useRef(null);

  const timeoutEnter = null;
  const timeoutLeave = null;
  const id = "slideit." + new Date().getTime();

  const itemWidth = (width / itemsPerSlide).toFixed(2);
  const itemWidthPercent = (100 / itemsPerSlide).toFixed(6);
  const firstIsActive =
    Number.isInteger(active) && Number.isInteger(active / itemsPerSlide);
  const lastIsActive =
    Number.isInteger(active) && Number.isInteger((active + 1) / itemsPerSlide);

  useEffect(() => {
    console.log(sliderInnerRef.current);
  }, [sliderInnerRef]);

  // RESIZE SIDE EFFECT
  const handleResize = useCallback(() => {
    sliderInnerRef.current &&
      setWidth(sliderInnerRef.current.getBoundingClientRect().width);
  }, [setWidth]);

  useEventListener("resize", handleResize);

  // HACK TO MAKE SURE RESIZE RUNS ON MOUNT TO SET SCROLL PROPERLY
  useEffect(() => {
    handleResize();
  }, []);

  const goToPrev = () => {
    setActive(null);
    setScroll(Math.min(0, scroll + width));
  };

  const goToNext = () => {
    setScroll(Math.max(scroll - width, -1 * width * (getNumberOfSlides() - 1)));
    setActive(null);
  };

  const canGoToNext = () => {
    const index = Math.abs(scroll / width);
    const indexMax = getNumberOfSlides() - 1;
    return index < indexMax;
  };

  const getNumberOfSlides = () => {
    return Math.max(0, Math.ceil(items.length / itemsPerSlide) - 1) + 1;
  };

  const updateActive = i => {
    timeoutLeave && clearTimeout(timeoutLeave);
    timeoutEnter = setTimeout(() => setActive(i), hoverTimeout);
    setActive(i);
    // NOT SURE WHAT THIS LINE DOES -> timeout = setTimeout(() => setActive(i), 300);
  };

  const removeActive = () => {
    timeoutEnter && clearTimeout(timeoutEnter);
    timeoutLeave = setTimeout(() => setActive(null), hoverTimeout);
    setActive(null);
  };

  const toggleActive = i => {
    if (active === i) {
      removeActive();
    } else {
      updateActive(i);
    }
  };

  return (
    <>
      <Slider navPadding={navPadding} itemProps={itemProps}>
        <SliderHandlePrev
          backgroundColor={backgroundColor}
          spaceBetween={spaceBetween}
          width={navPadding}
          disabled={scroll === 0}
          goToPrev={goToPrev}
        >
          <SliderHandlePrevInner goToPrev={goToPrev} disabled={scroll === 0} />
        </SliderHandlePrev>
        <SliderHandleNext
          backgroundColor={backgroundColor}
          spaceBetween={spaceBetween}
          width={navPadding}
          disabled={!canGoToNext()}
          goToNext={goToNext}
        >
          <SliderHandleNextInner
            disabled={!canGoToNext()}
            goToNext={goToNext}
          />
        </SliderHandleNext>
        <div ref={sliderInnerRef}>
          <SliderInner
            speedSlide={speedSlide}
            spaceBetween={spaceBetween}
            x={scroll}
            itemProps={itemProps}
          >
            {items.map((item, index) => (
              <SliderItem
                key={[id, index].join(".")}
                speedMove={speedMove}
                spaceBetween={spaceBetween}
                width={itemWidth}
                widthPercent={itemWidthPercent}
                scaleActiveBy={scaleActiveBy}
                scale={scale}
                translateLeft={Number.isInteger(active) && active > index}
                translateRight={Number.isInteger(active) && active < index}
                firstIsActive={firstIsActive}
                lastIsActive={lastIsActive}
                isFirst={Number.isInteger(index / itemsPerSlide)}
                isLast={Number.isInteger((index + 1) / itemsPerSlide)}
                isActive={active === index}
                index={index}
                itemProps={itemProps}
              >
                <SliderItemInner
                  {...itemProps(index)}
                  {...{
                    item,
                    index,
                    speedMove,
                    scaleActiveBy,
                    spaceBetween: spaceBetween,
                    width: itemWidth,
                    widthPercent: itemWidthPercent,
                    active: active === index,
                    setActive: () => updateActive(index),
                    removeActive: removeActive,
                    toggleActive: () => toggleActive(index),
                    itemProps
                  }}
                />
              </SliderItem>
            ))}
          </SliderInner>
        </div>
      </Slider>
    </>
  );
};

export default SlideIt;
