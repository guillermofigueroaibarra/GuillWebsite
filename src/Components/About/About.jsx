import React from "react";
import "./About.css";
import selfie from "../../assets/selfie.jpeg";

function About() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={selfie} alt="Profile" />
        </div>
        <div className="about-me-text">
          <h1>Hello World</h1>
          <p>
            I’m a bilingual computer science enthusiast with a passion for
            learning new technologies and programming languages. I hold a
            bachelor’s degree in Computer Science from Lewis University and an
            associate’s degree in Technical Support Specialist from College of
            DuPage. With a strong foundation in algorithms, data structures, and
            problem-solving, I’m eager to apply my skills to real-world
            challenges. I thrive on collaboration, but I also excel when working
            independently. Outside of tech, I enjoy traveling, cooking, and
            fitness, all of which help me stay active and engaged with the world
            around me. My goal is to continuously grow, learn from others, and
            create meaningful connections that benefit everyone involved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
