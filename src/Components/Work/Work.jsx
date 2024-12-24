import React from "react";
import "./Work.css";

import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import java from "../../assets/java.png";
import php from "../../assets/php.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import sql from "../../assets/sql.png";
import css from "../../assets/cssim.png";
import cplusplus from "../../assets/cpluss.png";
import bootstrap from "../../assets/boots.png";
import linux from "../../assets/linux.png";
import mongo from "../../assets/mongo.png";

function Work() {
  return (
    <div className="work-container">
      <h1 className="work-title"> Experience</h1>

      <div className="work-item">
        <p>
          I have a diverse background in programming and development, with
          proficiency in languages such as Java, Python, C++, JavaScript, PHP,
          and Assembly. My web development expertise includes HTML, CSS, React
          JS, and Bootstrap, complemented by database experience in SQL and
          MongoDB. I am skilled in using developer tools like GitHub, Visual
          Studio, PyCharm, IntelliJ, and Eclipse, and I am well-versed in
          operating systems such as Windows, Unix/Linux, macOS, iOS, and
          Android, including virtualization with VirtualBox. Additionally, I
          have hands-on experience with data analysis and visualization
          libraries like Pandas, NumPy, and Matplotlib. Currently, I work at BI
          Incorporated in Aurora, Illinois, where I provide advanced
          troubleshooting and support for hardware and software issues, process
          alerts, assist with translations from English to Spanish, and ensure
          compliance with monitoring operations and contractual obligations. If
          you’d like to learn more about my skills and experience, feel free to
          download my resume by clicking the button below.
        </p>
        <div class="buttonContainer">
          <button id="click">
            <i class="fa fa-download"></i>

            <a href="guillermoFigueroaResume.pdf" download="guillfigibResume">
              Download Resume
            </a>
          </button>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <img src={html} alt="HTML" />
          </div>
          <div className="grid-item">
            <img src={javascript} alt="JavaScript" />
          </div>
          <div className="grid-item">
            <img src={java} alt="Java" />
          </div>
          <div className="grid-item">
            <img src={php} alt="PHP" />
          </div>
          <div className="grid-item">
            <img src={python} alt="Python" />
          </div>
          <div className="grid-item">
            <img src={react} alt="React" />
          </div>
          <div className="grid-item">
            <img src={sql} alt="SQL" />
          </div>
          <div className="grid-item">
            <img src={mongo} alt="mongoDB" />
          </div>
          <div className="grid-item">
            <img src={css} alt="CSS" />
          </div>
          <div className="grid-item">
            <img src={cplusplus} alt="C++" />
          </div>
          <div className="grid-item">
            <img src={bootstrap} alt="Bootstrap" />
          </div>
          <div className="grid-item">
            <img src={linux} alt="Linux" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
