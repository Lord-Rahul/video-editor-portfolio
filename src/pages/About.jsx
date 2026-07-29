import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FiArrowRight,
  FiCamera,
  FiCpu,
  FiFilm,
  FiLayers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import photo from "../assets/navdeep-photo.jpg";

const highlights = [
  [
    "8+ years",
    "Crafting sharp edits for creators, brands, and digital stories",
  ],
  ["YouTube & Reels", "Fast-moving content with cinematic pacing and purpose"],
  ["Brand-first", "Every edit shaped around emotion, clarity, and retention"],
];

const services = [
  {
    title: "Story Editing",
    description:
      "Turning raw footage into a clean, emotional narrative with rhythm and intent.",
    icon: FiFilm,
  },
  {
    title: "Thumbnail Design",
    description:
      "Creating bold visual hooks that make people stop scrolling and click.",
    icon: FiCamera,
  },
  {
    title: "Motion & Polish",
    description:
      "Refining pacing, typography, transitions, and pacing for a premium finish.",
    icon: FiCpu,
  },
  {
    title: "Content Systems",
    description:
      "Building editable templates and repeatable assets for creators and brands.",
    icon: FiLayers,
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Navdeep</title>
        <meta
          name="description"
          content="Learn more about Navdeep, a video editor and motion storyteller focused on cinematic storytelling, premium pacing, and content that performs."
        />
      </Helmet>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="glass"
              style={{ borderRadius: "2rem", padding: "1.25rem" }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="text-muted"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: ".3em",
                  fontSize: ".78rem",
                }}
              >
                About
              </p>
              <h1 className="heading-1">
                I build edits that feel premium, intentional, and impossible to
                ignore.
              </h1>
              <p
                className="text-muted"
                style={{
                  marginTop: "1rem",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                Navdeep is a video editor and storyteller who turns raw footage
                into polished, high-impact content for YouTube, social media,
                and brand campaigns. The goal is always the same: make the story
                clearer, the pacing stronger, and the final result feel
                effortlessly cinematic.
              </p>
              <p
                className="text-muted"
                style={{
                  marginTop: "1rem",
                  fontSize: "1.02rem",
                  lineHeight: 1.8,
                }}
              >
                Whether it’s a short-form reel, a long-form YouTube edit, or a
                campaign asset, I focus on rhythm, emotion, and detail so the
                work feels elevated from the very first frame.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "1.4rem",
                }}
              >
                <Link to="/portfolio" className="btn btn-primary">
                  View Portfolio <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Work With Me
                </Link>
              </div>
            </motion.div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {highlights.map(([title, description]) => (
              <div
                key={title}
                className="glass"
                style={{ borderRadius: "1.3rem", padding: "1.25rem" }}
              >
                <h3 className="heading-3">{title}</h3>
                <p className="text-muted" style={{ marginTop: ".5rem" }}>
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="glass"
            style={{ borderRadius: "1.8rem", padding: "2rem" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.95fr 1.05fr",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  className="text-muted"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: ".3em",
                    fontSize: ".78rem",
                  }}
                >
                  Approach
                </p>
                <h2 className="heading-2">
                  A calm, premium process built around clarity and impact.
                </h2>
                <p
                  className="text-muted"
                  style={{ marginTop: "1rem", lineHeight: 1.8 }}
                >
                  I work closely with creators and brands to shape the message,
                  pacing, and visual language of each piece. The result is
                  content that feels refined without losing the energy needed to
                  perform online.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "1rem",
                }}
              >
                {services.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="glass"
                    style={{ borderRadius: "1.2rem", padding: "1rem" }}
                  >
                    <Icon size={18} style={{ marginBottom: ".6rem" }} />
                    <h3 className="heading-3" style={{ fontSize: "1rem" }}>
                      {title}
                    </h3>
                    <p
                      className="text-muted"
                      style={{ marginTop: ".4rem", fontSize: ".95rem" }}
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="glass"
            style={{
              borderRadius: "1.8rem",
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                className="text-muted"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: ".3em",
                  fontSize: ".78rem",
                }}
              >
                Testimonial
              </p>
              <h3 className="heading-2" style={{ fontSize: "1.6rem" }}>
                “The edit felt effortless, cinematic, and exactly tuned for the
                audience.”
              </h3>
              <p
                className="text-muted"
                style={{
                  marginTop: ".8rem",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                }}
              >
                A founder once said that the best edits don’t feel
                overworked—they feel inevitable. That is the standard I aim for
                in every frame.
              </p>
            </div>
            <div
              className="glass"
              style={{ borderRadius: "1.4rem", padding: "1.25rem" }}
            >
              <p
                className="text-muted"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: ".3em",
                  fontSize: ".76rem",
                }}
              >
                Selected work
              </p>
              <div
                style={{ display: "grid", gap: ".7rem", marginTop: ".8rem" }}
              >
                {[
                  "YouTube Narrative Cut",
                  "Instagram Reel Series",
                  "Brand Campaign Edit",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      borderBottom: "1px solid var(--color-border)",
                      paddingBottom: ".6rem",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="glass"
            style={{
              borderRadius: "1.8rem",
              padding: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                className="text-muted"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: ".3em",
                  fontSize: ".78rem",
                }}
              >
                Ready to create
              </p>
              <h3 className="heading-3">
                Let’s shape your next edit into something memorable.
              </h3>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
