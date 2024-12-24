import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-row"></div>
        <div class="footer-row">
          <p>Find me on social media</p>
          <ul class="social-links">
            <li>
              <a href="https://www.linkedin.com/in/gfi/" target="_blank">
                <i class="fa-brands fa-linkedin fa-2x"></i>
              </a>{" "}
            </li>
            <li>
              <a
                href="https://github.com/guillermofigueroaibarra"
                target="_blank"
              >
                <i class="fa-brands fa-github fa-2x"></i>{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
        <div class="footer-row">
          <p> ©GuillermoFigueroa</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
