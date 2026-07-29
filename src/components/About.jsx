import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container" style={{ display: "grid", gap: "2.2rem" }}>
        <SectionTitle
          eyebrow="About"
          title="Hi, I’m Navdeep — a video editor shaping stories with precision and emotion."
          description="With an editorial eye and a strong sense of rhythm, I help creators and brands turn raw footage into content that feels polished, cinematic, and built to connect."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: "1.5rem",
          }}
        >
          <div
            className="glass"
            style={{ borderRadius: "1.5rem", padding: "2rem" }}
          >
            <p
              className="text-muted"
              style={{ marginBottom: "1rem", lineHeight: 1.8 }}
            >
              I work closely with YouTubers, creators, and brands to turn rough
              ideas into refined visual stories with clear pacing, strong hooks,
              and a premium finish.
            </p>
            <div style={{ display: "grid", gap: ".7rem", marginTop: "1rem" }}>
              {[
                "YouTube Content",
                "Instagram Reels",
                "Thumbnail Design",
                "Brand Collaborations",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                    paddingBottom: ".55rem",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            className="glass"
            style={{ borderRadius: "1.5rem", padding: "2rem" }}
          >
            <h3 className="heading-3">Tools I use</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".75rem",
                marginTop: "1rem",
              }}
            >
              {[
                "Premiere Pro",
                "After Effects",
                "Photoshop",
                "CapCut",
                "DaVinci Resolve",
              ].map((tool) => (
                <span
                  key={tool}
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: ".55rem .8rem",
                    borderRadius: "999px",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
