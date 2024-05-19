import React from "react";

import { useRef, useEffect } from "react";
import WebglFluid from "webgl-fluid";

export default function Background() {
  const canvas = useRef(null);
  useEffect(function () {
    let c = canvas.current;
    let config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 0.97,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.5,
      SHADING: true,
      COLORFUL: true,
      PAUSED: false,
      BACK_COLOR: {
        r: 2,
        g: 3,
        b: 15,
      },
      TRANSPARENT: false,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
    };
    WebglFluid(c, config);

    // my canvas z-index is -1 it is going behind the whole page so i have added this code in which when mouse moves on body it will creates a mousemove event in which it transfers the cursor mouse moved position clientX and clientY
    const handleMouseMove = (event) => {
      dispatchCanvasMouseMove(event);
    };

    const dispatchCanvasMouseMove = (event) => {
      if (canvas.current && event.target !== canvas.current) {
        canvas.current.dispatchEvent(
          new MouseEvent("mousemove", {
            bubles: true,
            cancelable: true,
            clientX: event.clientX,
            clientY: event.clientY,
          })
        );
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    function resizeCanvas() {
      canvas.current.height = window.innerHeight;
      canvas.current.width = window.innerWidth;
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvas}
        className="fixed h-full w-full top-0 left-0 z-[-1]"
      ></canvas>
    </>
  );
}
