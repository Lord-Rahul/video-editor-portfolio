const stats = [
  { label: "Projects", value: "120+" },
  { label: "Clients", value: "48" },
  { label: "Years Experience", value: "8" },
  { label: "Views Generated", value: "1.2B" },
];

export default function StatsSection() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass"
              style={{
                borderRadius: "1.3rem",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <h3 className="heading-2" style={{ marginBottom: ".35rem" }}>
                {stat.value}
              </h3>
              <p className="text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
