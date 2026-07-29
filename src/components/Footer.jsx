import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="section" style={{ paddingBottom: "3rem" }}>
      <div
        className="container glass"
        style={{
          borderRadius: "1.5rem",
          padding: "2rem",
          display: "grid",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "26rem" }}>
            <h3 className="heading-3">Navdeep</h3>
            <p className="text-muted">
              Professional video editing and motion design for creators and
              brands looking to grow their audience with stronger visual
              stories.
            </p>
          </div>
          <div style={{ display: "grid", gap: ".5rem" }}>
            <strong>Quick Links</strong>
            {quickLinks.map((item) => (
              <Link key={item.label} to={item.to} className="text-muted">
                {item.label}
              </Link>
            ))}
          </div>
          <div style={{ display: "grid", gap: ".5rem" }}>
            <strong>Services</strong>
            {["YouTube Editing", "Instagram Content", "Brand Work"].map(
              (item) => (
                <span key={item} className="text-muted">
                  {item}
                </span>
              ),
            )}
            <a
              href="mailto:navdeepchandra1999@gmail.com"
              className="text-muted"
            >
              navdeepchandra1999@gmail.com
            </a>
            <a href="tel:+919816065978" className="text-muted">
              +91 9816065978
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            borderTop: "1px solid var(--color-border)",
            paddingTop: "1rem",
          }}
        >
          <p className="text-muted">
            © 2026 Navdeep. Built with passion for visual storytelling.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://www.instagram.com/naaavvv.v/"
              target="_blank"
              rel="noreferrer"
              className="text-muted"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@Whispering_Himalayas"
              target="_blank"
              rel="noreferrer"
              className="text-muted"
            >
              YouTube
            </a>
            <a
              href="mailto:navdeepchandra1999@gmail.com"
              className="text-muted"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
