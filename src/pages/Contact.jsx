import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(true);
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please email me directly.", {
        id: loading,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Navdeep</title>
        <meta
          name="description"
          content="Get in touch with Navdeep for video editing, reels, thumbnails, and brand content work."
        />
      </Helmet>
      <section className="section">
        <Toaster position="bottom-right" />
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <p
              className="text-muted"
              style={{
                textTransform: "uppercase",
                letterSpacing: ".3em",
                fontSize: ".78rem",
              }}
            >
              Contact
            </p>
            <h1 className="heading-1">
              Let’s build something striking together.
            </h1>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              className="glass"
              style={{
                borderRadius: "1.7rem",
                padding: "2rem",
                display: "grid",
                gap: "1rem",
              }}
            >
              <div>
                <h3 className="heading-3">Get in touch</h3>
                <p className="text-muted">
                  Available for collaborations, brand work, reels, YouTube
                  edits, and creative projects.
                </p>
              </div>
              <div style={{ display: "grid", gap: ".75rem" }}>
                <div>
                  <strong>Location</strong>
                  <p className="text-muted">Mumbai, India</p>
                </div>
                <div>
                  <strong>Email</strong>
                  <p className="text-muted">navdeepchandra1999@gmail.com</p>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p className="text-muted">+91 9816065978</p>
                </div>
                <div>
                  <strong>Instagram</strong>
                  <p className="text-muted">@naaavvv.v</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: ".75rem",
                  marginTop: ".25rem",
                }}
              >
                <a
                  href="https://www.instagram.com/naaavvv.v/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Instagram
                </a>
                <a
                  href="mailto:navdeepchandra1999@gmail.com"
                  className="btn btn-secondary"
                >
                  Email
                </a>
                <a
                  href="https://www.youtube.com/@Whispering_Himalayas"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  YouTube
                </a>
              </div>
            </div>

            <div
              className="glass"
              style={{ borderRadius: "1.7rem", padding: "2rem" }}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "grid", gap: "1rem" }}
              >
                {submitted ? (
                  <div
                    style={{
                      padding: "1rem 1.1rem",
                      borderRadius: "1rem",
                      border: "1px solid var(--color-border)",
                      background: "rgba(255,255,255,0.04)",
                      display: "flex",
                      alignItems: "center",
                      gap: ".75rem",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>✦</span>
                    <div>
                      <strong>Reply soon.</strong>
                      <p className="text-muted" style={{ margin: 0 }}>
                        Your note is on its way and I’ll get back to you
                        shortly.
                      </p>
                    </div>
                  </div>
                ) : null}
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
                <label>
                  <span>Project Type</span>
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
        </div>
      </section>
    </>
  );
}
