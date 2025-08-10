import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import YouTubeAudio from "../components/Audio";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <h1>Adèle Manga</h1>
      <Contact />
      <br />
      <br />
      <div className="contactfooter">
        <Footer />
      </div>
    </div>
  );
}
