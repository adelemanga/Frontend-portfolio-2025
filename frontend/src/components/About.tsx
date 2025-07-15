import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="portfolio">
      {/* Arrière-plan flou */}
      <div className="blur-background"></div>

      {/* Card de présentation */}
      <div className="profile-card">
        {/* Image de profil avec cadre */}
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

        {/* Texte de présentation */}
        <div className="text-content">
          <h1 className="title">
            Hi, I'm <span>Adèle Manga</span> 👋
          </h1>
          <p className="subtitle">
            Web Developer | Passionate about tech and UI/UX
          </p>

          {/* Boutons */}
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
