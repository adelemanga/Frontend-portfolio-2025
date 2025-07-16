import React from "react";
import Image from "next/image";

function Blog() {
  return (
    <div className="list">
      <h2>Blog</h2>

      <main>
        <video
          className="video-background5"
          src="https://i.imgur.com/4pS6nCp.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        <article>
          <h2>My first portfolio !</h2>
          <img
            className="img1Blog"
            src="https://i.imgur.com/DrcbKCv.png"
            alt="image2"
          />
          <p className="date">Published October 30, 2024</p>
          <p>
            Welcome to my very first portfolio! 🎉 This project represents much
            more than a simple showcase of my skills: it is a reflection of my
            evolution as a developer.I designed this site with,
            <b>React,</b> <b>Node.js,</b> <b>Javascript</b> and <b>CSS</b>, in
            putting the emphasis on a modern and dynamic interface. You will find
            my projects, my experiences and the technologies I use on a daily
            basis.
          </p>{" "}
        </article>
        <article>
          <h2>Discovering a passion: A website for a friend</h2>
          <img
            className="img1Blog"
            src="https://i.imgur.com/7oLVQV8.png"
            alt="image"
          />
          <p className="date">Published March 4, 2025</p>
          <p className="text-blog1">
            My friend is passionate about soccer and wants to share his
            expertise with other enthusiasts. To help him realize his project, I
            have developed a website that enables him to offer personalized
            soccer lessons, aimed at players of all levels. The site is designed
            to offer a simple and effective platform where users can register
            and book coaching sessions tailored to their needs. Whether for
            individual or group training sessions, the site showcases my
             skills, training methods, and personalized advice. The aim
            is to make learning soccer accessible to all, by offering a fluid
            and enjoyable user experience , while enabling each player to
            progress at his or her own pace
          </p>
        </article>
      </main>
    </div>
  );
}

export default Blog;
