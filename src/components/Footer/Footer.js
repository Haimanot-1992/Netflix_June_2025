import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="footer__links">
          <div className="footer__linksColumn">
            <a href="/Audio">Audio and Subtitles</a>
            <a href="/Media">Media Center</a>
            <a href="/privacy">Privacy</a>
            <a href="/Contact">Contact Us</a>
          </div>
          <div className="footer__linksColumn">
            <a href="#/Audio">Audio Description</a>
            <a href="/Investor">Investor Relations</a>
            <a href="/Legal">Legal Notices</a>
            <a href="/Corporate">Corporate Information</a>
          </div>
          <div className="footer__linksColumn">
            <a href="/Help">Help Center</a>
            <a href="/Jobs">Jobs</a>
            <a href="/Cookie">Cookie Preferences</a>
            <a href="/Gift">Gift Cards</a>
          </div>
          <div className="footer__linksColumn">
            <a href="/Account">Account</a>
            <a href="/Ways">Ways to Watch</a>
            <a href="/Terms">Terms of Use</a>
            <a href="/Speed">Speed Test</a>
          </div>
        </div>

        <div className="footer__service">
          <button className="footer__serviceButton">Service Code</button>
        </div>

        <div className="footer__copyright">
          <p>© 2025 Netflix Ethiopia</p>
          <p>This is a clone project for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
