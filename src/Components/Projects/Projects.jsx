import React from "react";
import "./Projects.css";
import EcoCulture from "../../assets/ecoculture.png";
import eco1 from "../../assets/eco1.png";
import eco2 from "../../assets/eco2.png";
import eco3 from "../../assets/eco3.png";
import eco4 from "../../assets/eco4.png";
import eco5 from "../../assets/eco5.png";
import eco6 from "../../assets/eco6.png";

import figTree from "../../assets/projectFigTree.png";
import fig1 from "../../assets/fig1.png";
import fig2 from "../../assets/fig2.png";
import fig3 from "../../assets/fig3.png";
import fig4 from "../../assets/fig4.png";

import cal1 from "../../assets/cal1.png";
import cal2 from "../../assets/cal2.png";
import cal3 from "../../assets/cal3.png";
import cal4 from "../../assets/cal4.png";

import connect4 from "../../assets/projectConnect4.png";
import prepmeal from "../../assets/prepmeals.png";
import ImgGallery from "../ImgGallery/ImgGallery";

function Projects() {
  const list1 = [EcoCulture, eco1, eco2, eco3, eco4, eco5, eco6];
  const list2 = [cal1, cal2, cal3, cal4];
  const list3 = [connect4];
  const list4 = [figTree, fig1, fig2, fig3, fig4];
  const list5 = [prepmeal];

  return (
    <div id="main">
      <h1>Portfolio Projects</h1>
      <p>
        Here are a few projects I have completed, as well as those I am
        currently working on, utilizing various programming languages and tools.
        Feel free to click on the project's picture to be taken to my code on
        GitHub.
      </p>

      <section className="posts">
        <article>
          <header>
            <h2 className="h2titles">
              <a href="https://github.com/guillermofigueroaibarra/EcoCulture.git">
                EcoCulture
              </a>
            </h2>

            <i>React JS, Mongo DB, Javascript, CSS, HTML, Axios, Toastify</i>
          </header>
          <ImgGallery images={list1}></ImgGallery>

          <p>
            EcoCulture is a full-stack website that combines technology with
            sustainability to create a seamless and impactful user experience.
            The platform features a user-friendly interface that allows
            individuals to register, log in, and engage in eco-friendly
            activities, such as donating or requesting sustainable goods. Key
            features include a donation center where users can upload items they
            no longer need, and an intuitive search and request system for users
            looking to receive donated items.
          </p>
        </article>

        <article>
          <header>
            <h2 className="h2titles">
              <a
                href="https://github.com/guillermofigueroaibarra/Connect4Game.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect 4
              </a>
            </h2>
            <i>Java</i>
          </header>
          <a
            href="https://github.com/guillermofigueroaibarra/Connect4Game.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="projectImgs" src={connect4} alt="Connect 4 Game" />
          </a>
          <div className="content">
            <p>
              The Connect 4 Game project involved creating a Java application
              that implemented error handling to manage invalid moves, ensuring
              a smooth gaming experience. A robust object-oriented
              implementation of the classic Connect 4 game was developed,
              complemented by a user-friendly graphical interface.
            </p>
          </div>
        </article>

        <article>
          <header>
            <h2 className="h2titles">
              <a
                href="https://github.com/guillermofigueroaibarra/Travel-Estimator.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Travel Estimator
              </a>
            </h2>
            <i>Python</i>
          </header>

          <ImgGallery images={list2}></ImgGallery>

          <p>
            This project involved creating a Python application for backpackers
            to efficiently estimate trip expenses. The application provides a
            user-friendly graphical interface with robust error handling for
            accurate input processing.
          </p>
        </article>

        <article>
          <header>
            <h2 className="h2titles">
              <a href="https://github.com/guillermofigueroaibarra/FigTreePlantShop">
                The Fig Tree Plant Shop{" "}
              </a>
            </h2>
            <i>HTML, CSS, JavaScript</i>
          </header>
          <ImgGallery images={list4}></ImgGallery>
          <p>
            The Plant Shop website project involved creating a dynamic
            e-commerce site for showcasing various plant products. The layout is
            fully responsive, and features such as hover effects were added to
            enhance user engagement.
          </p>
        </article>

        <article>
          <header>
            <h2 className="h2titles">
              <a href="https://github.com/guillermofigueroaibarra/MealPrep-Generator">
                Meal-Prep Generator (In Progress...)
              </a>
            </h2>
            <i>PHP, SQL</i>
          </header>
          <a href="https://github.com/guillermofigueroaibarra/MealPrep-Generator">
            <img
              className="projectImgs"
              src={prepmeal}
              alt="Meal-Prep Generator Project"
            />
          </a>
          <p>
            The PHP project is a responsive website designed to provide users
            with personalized meal-prep ideas based on their dietary preferences
            and nutritional goals.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Projects;
