import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import photo from "../assets/navdeep-photo.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        alignItems: "center",
        padding: "4rem 0 5rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-muted"
            style={{
              textTransform: "uppercase",
              letterSpacing: ".35em",
              fontSize: ".8rem",
              marginBottom: "1rem",
            }}
          >
            Video Editor & Thumbnail Designer
          </p>
          <h1 className="heading-1">
            Crafting premium edits that feel cinematic and unmistakably
            intentional.
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: "1.08rem",
              maxWidth: "42rem",
              marginTop: "1rem",
              lineHeight: 1.8,
            }}
          >
            I turn raw footage and ideas into polished stories for YouTube,
            Instagram, and brands—shaping every cut with rhythm, mood, and
            purpose.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <a href="/portfolio" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="/contact" className="btn btn-secondary">
              Let&apos;s Talk <FiPlay />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.2rem",
              flexWrap: "wrap",
              marginTop: "1.75rem",
            }}
          >
            <span
              className="glass"
              style={{ borderRadius: "999px", padding: ".65rem .9rem" }}
            >
              5.0 Rating
            </span>
            <span
              className="glass"
              style={{ borderRadius: "999px", padding: ".65rem .9rem" }}
            >
              100+ Happy Clients
            </span>
            <span
              className="glass"
              style={{ borderRadius: "999px", padding: ".65rem .9rem" }}
            >
              500+ Projects
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass"
          style={{
            borderRadius: "2rem",
            padding: "1.25rem",
            display: "grid",
            gap: "1rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            <span className="text-muted">Featured ✦</span>
            <span
              className="glass"
              style={{ borderRadius: "999px", padding: ".45rem .7rem" }}
            >
              Available for projects
            </span>
          </div>
          <img
            src={photo}
            alt="Navdeep"
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              borderRadius: "1.5rem",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              className="glass"
              style={{ borderRadius: "1rem", padding: "1rem" }}
            >
              <strong>100+</strong>
              <p className="text-muted">Videos Edited</p>
            </div>
            <div
              className="glass"
              style={{ borderRadius: "1rem", padding: "1rem" }}
            >
              <strong>50+</strong>
              <p className="text-muted">Happy Clients</p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06), transparent)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
