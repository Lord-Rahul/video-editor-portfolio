import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiPlay,FiPause, FiVolume2, FiVolumeX } from "react-icons/fi";
import reel1 from "../assets/instagram/VID-20250720-WA0007.mp4";
import reel2 from "../assets/instagram/VID-20250720-WA0008.mp4";
import reel3 from "../assets/instagram/VID-20250720-WA0009.mp4";
import reel4 from "../assets/instagram/VID-20250720-WA0010.mp4";

function getSeedItems() {
  return [
    {
      id: 1,
      title: "Music Video Premiere",
      type: "YouTube",
      category: "Short-form edit",
      description: "A polished YouTube edit with dynamic pacing and cinematic rhythm.",
      link: "https://youtu.be/E1FvhGIi-O4?si=XmGYZ8H76L0TGr4c",
      embed: normalizeEmbedUrl("https://youtu.be/E1FvhGIi-O4?si=XmGYZ8H76L0TGr4c", "YouTube"),
      result: "A strong, engaging edit built for viral reach and audience retention.",
    },
    {
      id: 2,
      title: "Brand Story Edit",
      type: "YouTube",
      category: "YouTube sample",
      description: "A story-driven cut designed to hold attention from the first frame.",
      link: "https://youtu.be/IZnV0RtpfNY?si=8mwXLbyvZIKxuSqu",
      embed: normalizeEmbedUrl("https://youtu.be/IZnV0RtpfNY?si=8mwXLbyvZIKxuSqu", "YouTube"),
      result: "A polished edit engineered to elevate the brand narrative.",
    },
    {
      id: 3,
      title: "Social Reel Edit",
      type: "YouTube",
      category: "Creative reel",
      description: "A punchy social-first video with sharp cuts and a memorable hook.",
      link: "https://youtu.be/r8SUSl4SzME?si=v53UbATRgs0IKvKl",
      embed: normalizeEmbedUrl("https://youtu.be/r8SUSl4SzME?si=v53UbATRgs0IKvKl", "YouTube"),
      result: "A fast-moving edit built to perform on YouTube and social channels.",
    },
    {
      id: 4,
      title: "Dev Pashakot: The Living Faith",
      type: "YouTube",
      category: "Documentary",
      description: "A cinematic documentary edit exploring Himachal’s living deity and sacred ritual traditions.",
      link: "https://youtu.be/9LuB0o0dFv0?si=24F8wrzHzmboVoD0",
      embed: normalizeEmbedUrl("https://youtu.be/9LuB0o0dFv0?si=24F8wrzHzmboVoD0", "YouTube"),
      result: "A polished showcase that highlights mood, rhythm, and narrative clarity.",
    },
    {
      id: 5,
      title: "Mumbai Reel Cut",
      type: "Reel",
      category: "Instagram Reel",
      description: "A local reel with energetic editing and bold visual pacing, built for social impact.",
      link: reel1,
      embed: reel1,
      result: "An engaging reel edit that performs well in fast-scrolling feeds.",
    },
    {
      id: 6,
      title: "Urban Story Reel",
      type: "Reel",
      category: "Instagram Reel",
      description: "A short-form social edit with strong motion and a cinematic mood.",
      link: reel2,
      embed: reel2,
      result: "A fast-moving reel designed to capture attention instantly.",
    },
    {
      id: 7,
      title: "Lifestyle Cut Reel",
      type: "Reel",
      category: "Instagram Reel",
      description: "A quick social clip with crisp timing and visually striking transitions.",
      link: reel3,
      embed: reel3,
      result: "A polished short-form piece made for engagement and rewatch value.",
    },
    {
      id: 8,
      title: "Brand Energy Reel",
      type: "Reel",
      category: "Instagram Reel",
      description: "A high-energy edit built around strong beats and brand-driven visuals.",
      link: reel4,
      embed: reel4,
      result: "A fast-paced reel that highlights mood, tempo, and visual polish.",
    },
  ];
}

function normalizeEmbedUrl(link, type) {
  const value = (link || "").trim();
  if (!value) return "";

  if (type === "YouTube") {
    try {
      const url = new URL(value);
      if (url.hostname.includes("youtube.com")) {
        const videoId = url.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
      if (url.hostname === "youtu.be") {
        const videoId = url.pathname.split("/").filter(Boolean)[0];
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch {
      // fall back to the original value below
    }
  }

  return value;
}

export default function PortfolioPage() {
  const [showcaseItems] = useState(getSeedItems);
  const videoRefs = useRef({});
  const [mutedStates, setMutedStates] = useState({});
  const [playingStates, setPlayingStates] = useState({});

  const youtubeItems = useMemo(
    () => showcaseItems.filter((item) => item.type === "YouTube"),
    [showcaseItems]
  );

  const reelItems = useMemo(
    () => showcaseItems.filter((item) => item.type === "Reel"),
    [showcaseItems]
  );

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlayingStates((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlayingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleMute = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;
    video.muted = !video.muted;
    setMutedStates((prev) => ({ ...prev, [id]: video.muted }));
  };

  const renderMediaCard = (item) => {
    const isYouTube = item.type === "YouTube" || /youtube\.com|youtu\.be/.test(item.embed || "");
    const isVideoFile = /\.(mp4|mov|webm|m4v)(\?.*)?$/i.test(item.embed || "");
    const aspectRatio = item.type === "Reel" ? "9 / 16" : "16 / 9";

    return (
      <motion.article
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
        className="glass"
        style={{ borderRadius: "1.5rem", overflow: "hidden", display: "grid" }}
      >
        {isYouTube ? (
          <div style={{ width: "100%", aspectRatio: aspectRatio, position: "relative", overflow: "hidden", background: "#000" }}>
            <iframe
              src={item.embed}
              title={item.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0, position: "absolute", inset: 0 }}
            />
          </div>
        ) : isVideoFile ? (
          <div style={{ width: "100%", aspectRatio: aspectRatio, position: "relative", overflow: "hidden", background: "#000" }}>
            <video
              ref={(ref) => {
                if (ref) videoRefs.current[item.id] = ref;
              }}
              src={item.embed}
              muted={mutedStates[item.id] ?? true}
              preload="metadata"
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: "min(68px, 12vw)",
                  height: "min(68px, 12vw)",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "auto",
                  cursor: "pointer",
                }}
                onClick={() => togglePlay(item.id)}
              >
                <FiPlay className="text-white" size={28} />
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute(item.id);
              }}
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {mutedStates[item.id] !== false ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
            </button>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, rgba(255,255,255,0.06), transparent)",
              color: "inherit",
            }}
          >
            Preview unavailable
          </div>
        )}
        <div style={{ padding: "1.25rem", display: "grid", gap: ".7rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: ".5rem" }}>
            <p className="text-muted" style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".24em", margin: 0 }}>
              {item.type}
            </p>
            <span className="glass" style={{ borderRadius: "999px", padding: ".4rem .7rem", fontSize: ".75rem" }}>
              {item.category}
            </span>
          </div>
          <h3 className="heading-3" style={{ margin: 0 }}>{item.title}</h3>
          <p className="text-muted" style={{ margin: 0, lineHeight: 1.7 }}>{item.description}</p>
        </div>
      </motion.article>
    );
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Navdeep</title>
        <meta
          name="description"
          content="Browse reels, YouTube samples, and editing work by Navdeep."
        />
      </Helmet>
      <div className="container">
        <section style={{ marginBottom: "2rem" }}>
          <p className="eyebrow">Portfolio</p>
          <h1 className="heading-1">YouTube and Reel Work</h1>
          <p className="text-muted" style={{ maxWidth: "46rem" }}>
            A simple showcase of selected YouTube edits and local reels. No drawer, no extras — just media cards you can scan quickly.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="heading-2">YouTube</h2>
          <p className="text-muted" style={{ maxWidth: "40rem", marginBottom: "1rem" }}>
            Selected YouTube edits with clean presentation and quick access.
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}
            >
              {youtubeItems.map(renderMediaCard)}
            </motion.div>
          </AnimatePresence>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 className="heading-2">Reels</h2>
          <p className="text-muted" style={{ maxWidth: "40rem", marginBottom: "1rem" }}>
            Local reels built for fast-scrolling social feeds.
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}
            >
              {reelItems.map(renderMediaCard)}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </>
  );
}
