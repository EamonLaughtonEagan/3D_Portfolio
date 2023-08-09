import React, { useState, useEffect, forwardRef } from "react";
import { Canvas } from "@react-three/fiber";

const CanvasWrapper = forwardRef(({ children }, canvasRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, [canvasRef]);

  return <>{isVisible && children}</>;
});

export default CanvasWrapper;
