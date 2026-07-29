import SectionTitle from "./SectionTitle";

const workflow = ["Discovery", "Planning", "Editing", "Review", "Delivery"];

export default function WorkflowSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Workflow"
          title="A clean, intentional process from concept to delivery."
          description="Every step is designed to keep communication clear and quality high."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {workflow.map((step, index) => (
            <div
              key={step}
              className="glass"
              style={{ borderRadius: "1.2rem", padding: "1.25rem" }}
            >
              <p
                className="text-muted"
                style={{
                  fontSize: ".75rem",
                  textTransform: "uppercase",
                  letterSpacing: ".2em",
                }}
              >
                0{index + 1}
              </p>
              <h3 className="heading-3">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
