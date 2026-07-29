import { useState } from "react";
import SectionTitle from "./SectionTitle";
import faq from "../data/faq.json";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions before we begin?"
          description="A few answers to help you understand the process and collaboration style."
        />
        <div style={{ display: "grid", gap: ".8rem" }}>
          {faq.map((item, index) => (
            <div
              key={item.question}
              className="glass"
              style={{ borderRadius: "1.2rem", padding: "1.15rem 1.25rem" }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: 0,
                  color: "inherit",
                  textAlign: "left",
                  padding: 0,
                }}
              >
                <strong>{item.question}</strong>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index ? (
                <p className="text-muted" style={{ marginTop: ".8rem" }}>
                  {item.answer}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
