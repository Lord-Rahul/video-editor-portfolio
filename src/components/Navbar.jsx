import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const MotionNavLink = motion(NavLink);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderRadius: "0 0 1.25rem 1.25rem",
        backdropFilter: "blur(28px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Link
            to="/"
            className="heading-3"
            style={{
              fontWeight: 700,
              letterSpacing: ".24em",
              textTransform: "uppercase",
            }}
          >
            Navdeep
          </Link>
        </motion.div>

        <motion.nav
          aria-label="Primary"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          style={{ display: "flex", gap: "1.4rem", alignItems: "center" }}
        >
          {links.map((link) => (
            <MotionNavLink
              key={link.label}
              to={link.to}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              style={({ isActive }) => ({
                fontSize: ".95rem",
                opacity: isActive ? 1 : 0.7,
                fontWeight: isActive ? 700 : 500,
                position: "relative",
                padding: ".2rem 0",
                color: "inherit",
                textTransform: "uppercase",
                letterSpacing: ".14em",
              })}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <motion.span
                    layout
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      display: "block",
                      height: "2px",
                      background: "currentColor",
                      borderRadius: "999px",
                      marginTop: ".45rem",
                    }}
                  />
                </>
              )}
            </MotionNavLink>
          ))}

          <motion.button
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="btn btn-secondary"
            aria-label="Toggle theme"
            style={{ padding: ".75rem", minWidth: "3rem" }}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </motion.button>
        </motion.nav>
      </div>
    </motion.header>
  );
}
