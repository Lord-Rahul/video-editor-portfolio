import SectionTitle from "./SectionTitle";
import {
  FaFileVideo,
  FaTools,
  FaPhotoVideo,
  FaVideo,
} from "react-icons/fa";
import { SiDavinciresolve } from "react-icons/si";

const tools = [
  {
    label: "Premiere Pro",
    Icon: FaFileVideo,
    color: "#9999ff",
  },
  {
    label: "After Effects",
    Icon: FaTools,
    color: "#70d7ff",
  },
  {
    label: "Photoshop",
    Icon: FaPhotoVideo,
    color: "#31a8ff",
  },
  {
    label: "CapCut",
    Icon: FaVideo,
    color: "#ff7a59",
  },
  {
    label: "DaVinci Resolve",
    Icon: SiDavinciresolve,
    color: "#2ccf7f",
  },
];

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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {tools.map(({ label, Icon, color }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".75rem",
                    padding: ".95rem 1rem",
                    borderRadius: "1.25rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.03)",
                    transition: "transform 180ms ease, box-shadow 180ms ease",
                  }}
                  className="hover-raise"
                >
                  <span
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.06)",
                      color,
                    }}
                  >
                    <Icon size={20} />
                  </span>
                  <span style={{ fontSize: ".95rem", fontWeight: 500 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
