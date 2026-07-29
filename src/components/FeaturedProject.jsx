export default function FeaturedProject() {
  return (
    <section className="section">
      <div
        className="container glass"
        style={{
          borderRadius: "2rem",
          padding: "2rem",
          display: "grid",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: "2rem",
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
              Ready to Create
            </p>
            <h2 className="heading-2">Ready to create something amazing?</h2>
            <p className="text-muted">
              Let’s discuss your project and bring your vision to life through
              sharp storytelling, polished pacing, and visual content that
              stands out.
            </p>
          </div>
          <div style={{ display: "grid", gap: ".8rem" }}>
            <div>
              <strong>What I can help with</strong>
              <p className="text-muted">
                YouTube edits, Instagram reels, thumbnail design, and campaign
                content for creators and brands.
              </p>
            </div>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
