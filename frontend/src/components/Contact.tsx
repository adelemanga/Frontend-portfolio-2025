import { useMutation } from "@apollo/client";
import { useState } from "react";
import React from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Future mutation logic here...
    setSuccessMessage("Form submitted!");
  };

  return (
    <div className="contact">
      <video
        className="video-background"
        src="https://i.imgur.com/Q83KGpc.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
      <h2>Adèle Manga</h2>

      <form className="contact" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastname">Firstname : Adèle</label>
        </div>

        <div className="form-group">
          <label htmlFor="name">Lastname : Manga</label>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email : adelemanga75@gmail.com</label>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message : Hello, I’m Adèle, a front-end web developer from France. I
            specialize in building responsive, user-friendly interfaces using
            HTML, CSS, Tailwind CSS, JavaScript, Next.js and React. I recently
            completed a professional training program and have one year of
            hands-on experience through an apprenticeship in web development.
            I’m currently looking for a full-time internship in the U.S.
            (available for up to 18 months) as part of a J-1 visa program. Don’t
            hesitate to contact me! Let’s build something great together.
          </label>
        </div>
      </form>

      {successMessage && <p>{successMessage}</p>}

      <div className="image-container1">
        <img
          src="https://adelemanga-portfolio.netlify.app/static/media/girlme.0acab6167e7db055cb7a.png"
          alt="Original Image"
          className="clone-1"
        />
      </div>
    </div>
  );
}

export default Contact;

