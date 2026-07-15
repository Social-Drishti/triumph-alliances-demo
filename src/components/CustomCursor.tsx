import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerSpringConfig = { damping: 15, stiffness: 350 };
  const cursorXInnerSpring = useSpring(cursorX, innerSpringConfig);
  const cursorYInnerSpring = useSpring(cursorY, innerSpringConfig);

  useEffect(() => {
    // Detect touch device or mobile screen
    const checkDevice = () => {
      const mobileOrTouch =
        window.matchMedia("(max-width: 768px)").matches ||
        ("ontouchstart" in window) ||
        navigator.maxTouchPoints > 0;
      setIsMobile(mobileOrTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive-cursor") ||
        target.closest(".interactive-cursor")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer outline ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.2)" : "rgba(212, 175, 55, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-gold pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorXInnerSpring,
          y: cursorYInnerSpring,
          marginLeft: "12px",
          marginTop: "12px",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
