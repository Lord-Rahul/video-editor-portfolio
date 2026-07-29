import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import portfolio from "../data/portfolio.json";

const filters = ["All", "YouTube", "Instagram", "Thumbnails", "Brands"];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return portfolio;
    return portfolio.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Portfolio"
          title="Selected work built for engagement, clarity, and brand presence."
          description="A curated set of edits and designs created for creators, channels, and brand campaigns."
        />
        <div
          style={{
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -2, scale: 1.01 }}
              className={
                activeFilter === filter
                  ? "btn btn-primary"
                  : "btn btn-secondary"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass"
                style={{ borderRadius: "1.4rem", overflow: "hidden" }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />
                <div style={{ padding: "1.25rem" }}>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: ".78rem",
                      textTransform: "uppercase",
                      letterSpacing: ".24em",
                    }}
                  >
                    {item.category}
                  </p>
                  <h3 className="heading-3" style={{ marginTop: ".35rem" }}>
                    {item.title}
                  </h3>
                  <p className="text-muted" style={{ marginTop: ".5rem" }}>
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
