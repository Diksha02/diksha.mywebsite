import React from "react";

function BottomContainer() {
  return (
    <div class="bottom-container">
      <a
        class="footer-link"
        href="https://www.linkedin.com/in/diksha-nigam-116995198/"
      >
        LinkedIn
      </a>
      <a class="footer-link" href="https://twitter.com/DikshaNigam10">
        Twitter
      </a>
      <a class="footer-link" href="https://diksha02.github.io/cv/">
        Website
      </a>
      <p class="last-line">© {new Date().getFullYear()} Diksha Nigam</p>
    </div>
  );
}

export default BottomContainer;
