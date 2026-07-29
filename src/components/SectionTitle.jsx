export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div style={{ maxWidth: "42rem", marginBottom: "2.5rem" }}>
      <p
        className="text-muted"
        style={{
          textTransform: "uppercase",
          letterSpacing: ".3em",
          fontSize: ".78rem",
          marginBottom: ".6rem",
        }}
      >
        {eyebrow}
      </p>
      <h2 className="heading-2">{title}</h2>
      {description ? <p className="text-muted">{description}</p> : null}
    </div>
  );
}
