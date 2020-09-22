import React, { useEffect, useRef } from "react";

const scrollToTop = (Component) => {
  const ScrollToTop = (props) => {
    const prevCounterRef = useRef();
    useEffect(() => {
      prevCounterRef.current = props;
    });

    const prevProps = prevCounterRef.current;
    const { location } = props || {};
    if (!!location && !!prevProps && !!prevProps.location) {
      if (location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }
    return <Component {...props} />;
  };
  return ScrollToTop;
};

export default scrollToTop;
