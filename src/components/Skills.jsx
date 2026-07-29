import SectionTitle from "./SectionTitle";

const skills = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop",
  "Illustrator",
  "Blender",
  "CapCut",
  "Audition",
  "Motion Graphics",
  "Storytelling",
  "Color Grading",
  "Sound Design",
];

export default function SkillsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Technical precision meets artistic instinct."
          description="Every project is assembled with craft, clarity, and cinematic rhythm."
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".8rem" }}>
          {skills.map((skill) => (
            <span
              key={skill}
              className="glass"
              style={{ borderRadius: "999px", padding: ".8rem 1rem" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
