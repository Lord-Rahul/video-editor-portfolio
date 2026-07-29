import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const loading = toast.loading("Sending your message...");
    try {
      const payload = new URLSearchParams();
      payload.append("name", data.name || "");
      payload.append("email", data.email || "");
      payload.append("subject", data.subject || "New contact request");
      payload.append("message", data.message || "");
      payload.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/ajax/navdeepchandra1999@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || "Request failed");
      }

      toast.success("Message sent. I will be in touch soon.", { id: loading });
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please email me directly.", {
        id: loading,
      });
    }
  };

  return (
    <section id="contact" className="section">
      <Toaster position="bottom-right" />
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s discuss your next project."
          description="Tell me about your idea, timeline, and goal so I can help shape the right edit or content package for you."
        />
        <div
          className="glass"
          style={{ borderRadius: "1.7rem", padding: "2rem" }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "grid", gap: "1rem" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              <label>
                <span>Name</span>
                <input
                  {...register("name", { required: true })}
                  style={{
                    width: "100%",
                    marginTop: ".35rem",
                    padding: ".85rem 1rem",
                    borderRadius: ".8rem",
                    border: "1px solid var(--color-border)",
                    background: "transparent",
                    color: "inherit",
                  }}
                />
                {errors.name ? (
                  <small style={{ color: "var(--color-text-secondary)" }}>
                    Name is required
                  </small>
                ) : null}
              </label>
              <label>
                <span>Email</span>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                  style={{
                    width: "100%",
                    marginTop: ".35rem",
                    padding: ".85rem 1rem",
                    borderRadius: ".8rem",
                    border: "1px solid var(--color-border)",
                    background: "transparent",
                    color: "inherit",
                  }}
                />
                {errors.email ? (
                  <small style={{ color: "var(--color-text-secondary)" }}>
                    Valid email required
                  </small>
                ) : null}
              </label>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              <label>
                <span>Subject</span>
                <input
                  {...register("subject")}
                  style={{
                    width: "100%",
                    marginTop: ".35rem",
                    padding: ".85rem 1rem",
                    borderRadius: ".8rem",
                    border: "1px solid var(--color-border)",
                    background: "transparent",
                    color: "inherit",
                  }}
                />
              </label>
              <label>
                <span>Budget</span>
                <input
                  {...register("budget")}
                  style={{
                    width: "100%",
                    marginTop: ".35rem",
                    padding: ".85rem 1rem",
                    borderRadius: ".8rem",
                    border: "1px solid var(--color-border)",
                    background: "transparent",
                    color: "inherit",
                  }}
                />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea
                {...register("message", { required: true })}
                rows="5"
                style={{
                  width: "100%",
                  marginTop: ".35rem",
                  padding: ".85rem 1rem",
                  borderRadius: ".8rem",
                  border: "1px solid var(--color-border)",
                  background: "transparent",
                  color: "inherit",
                }}
              />
              {errors.message ? (
                <small style={{ color: "var(--color-text-secondary)" }}>
                  Message is required
                </small>
              ) : null}
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: "fit-content" }}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
