import SectionTitle from "./SectionTitle";
import services from "../data/services.json";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Editing that feels refined and results-driven."
          description="From social-first cuts to cinematic launches, each service is shaped for emotion, clarity, and impact."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="glass"
              style={{ borderRadius: "1.3rem", padding: "1.5rem" }}
            >
              <h3 className="heading-3">{service.title}</h3>
              <p
                className="text-muted"
                style={{ marginTop: ".6rem", lineHeight: 1.7 }}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
