export default function NotFoundPage() {
  return (
    <section className="section">
      <div
        className="container"
        style={{ textAlign: "center", padding: "6rem 0" }}
      >
        <p
          className="text-muted"
          style={{
            textTransform: "uppercase",
            letterSpacing: ".3em",
            fontSize: ".76rem",
          }}
        >
          404
        </p>
        <h1 className="heading-1">This page is not available.</h1>
        <a href="/" className="btn btn-primary" style={{ marginTop: "1.2rem" }}>
          Return Home
        </a>
      </div>
    </section>
  );
}
