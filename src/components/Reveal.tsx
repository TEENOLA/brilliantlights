import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealDirection = "below" | "left" | "right" | "scale";

type RevealProps = {
  /** The element to render, so Reveal can replace a card's own tag and keep layouts intact. */
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds, for cards that sit in a row. */
  delayMs?: number;
  /** Where the element comes from before it appears. */
  from?: RevealDirection;
  /** Adds a gentle lift and shadow on hover. */
  lift?: boolean;
};

const hiddenClasses: Record<RevealDirection, string> = {
  below: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  scale: "opacity-0 scale-90",
};

const shownClasses = "opacity-100 translate-x-0 translate-y-0 scale-100";

const liftClasses =
  "motion-safe:hover:-translate-y-1.5 hover:shadow-[0_14px_32px_rgba(16,42,80,0.14)]";

/** People who ask their device for reduced motion, and old browsers, just see everything straight away. */
function canAnimateOnScroll(): boolean {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return false;
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Fades and slides its content in the first time it scrolls into view. */
export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delayMs = 0,
  from = "below",
  lift = false,
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(() => !canAnimateOnScroll());
  const [hasSettled, setHasSettled] = useState(() => !canAnimateOnScroll());

  useEffect(() => {
    if (isVisible) {
      return;
    }
    const element = elementRef.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  // Once the entrance has finished, drop the stagger delay so hover effects respond instantly.
  useEffect(() => {
    if (!isVisible || hasSettled) {
      return;
    }
    const settleTimer = window.setTimeout(() => setHasSettled(true), delayMs + 900);
    return () => window.clearTimeout(settleTimer);
  }, [isVisible, hasSettled, delayMs]);

  return (
    <Tag
      ref={elementRef}
      style={{ transitionDelay: hasSettled ? "0ms" : `${delayMs}ms` }}
      className={`transition-[opacity,translate,scale,box-shadow] duration-700 ease-out ${
        isVisible ? shownClasses : hiddenClasses[from]
      } ${lift ? liftClasses : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
