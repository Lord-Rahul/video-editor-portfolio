import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        transformOrigin: "0%",
        zIndex: 100,
        background: "var(--color-text-primary)",
      }}
      animate={{ scaleX: scrollYProgress }}
    />
  );
}
