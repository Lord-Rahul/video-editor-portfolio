import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="btn btn-secondary"
      style={{
        position: "fixed",
        right: "1.2rem",
        bottom: "1.2rem",
        zIndex: 60,
        width: "3rem",
        height: "3rem",
        borderRadius: "999px",
        padding: 0,
      }}
      aria-label="Back to top"
    >
      <FiArrowUp />
    </motion.button>
  );
}
