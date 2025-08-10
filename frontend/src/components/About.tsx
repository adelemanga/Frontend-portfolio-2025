import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <div className="portfolio">
      <div className="blur-background"></div>

      <div className="profile-card">
        <div className="image-container">
          <div className="image-border">
            <img
              src="https://i.imgur.com/1LdqBMP.jpeg"
              alt="Votre Nom"
              width={180}
              height={180}
              className="profile-img"
            />
          </div>
        </div>

        <div className="text-content">
          <h1 className="title">
            Hi, I am <span>Adèle Manga</span> 👋
          </h1>
          <p className="subtitle">
            Web Developer | Passionate about tech and UI/UX
          </p>

          <div className="buttons">
            <Link href="/projects" className="btn">
              See My Projects
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
