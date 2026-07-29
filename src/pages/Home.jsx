import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FeaturedProject from "../components/FeaturedProject";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Navdeep | Video Editor & Motion Designer"
        description="A clean, modern portfolio for a video editor and motion designer focused on YouTube, Instagram, and brand storytelling."
        canonical="https://example.com"
      />
      <Hero />
      <About />
      <Services />
      <FeaturedProject />
      <Contact />
      <Footer />
    </>
  );
}
