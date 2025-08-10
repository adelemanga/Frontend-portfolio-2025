import React from "react";

export default function HomePage() {
  return (
    <div
      className="video-container"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <iframe
        className="video-background"
        src="https://www.youtube.com/embed/1NKBpxlxrjU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          zIndex: 0,
        }}
      />

      <div
        className="video-overlay"
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <h1 className="home">Hello, I am Adèle Manga</h1>
        <p>Front-end developer — welcome to my portfolio</p>
      </div>
    </div>
  );
}
