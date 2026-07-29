import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import testimonials from "../data/testimonials.json";

export default function TestimonialsSection() {
  return (
    <section className="section">
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
            Testimonials
          </p>
          <h2 className="heading-2">
            Kind words from clients and collaborators.
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div
                className="glass"
                style={{ borderRadius: "1.4rem", padding: "1.4rem" }}
              >
                <p style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>
                  “{item.quote}”
                </p>
                <div>
                  <strong>{item.name}</strong>
                  <p className="text-muted">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
