/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const Heading = ({ title, titleRef }) => {
  // useIntersection Function
  const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { rootMargin }
      );
      element.current && observer.observe(element.current);
      return () => observer.unobserve(element.current);
    }, []);
    return isVisible;
  };
  // InViewPort VAR 
  const inViewport = useIntersection(titleRef);
  return (
    <h2
      className={"main-title my-5 mx-auto " + (inViewport ? "viewed" : "")}
      ref={titleRef}
    >
      {title}
    </h2>
  );
};

export default Heading;
