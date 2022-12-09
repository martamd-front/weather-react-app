import React from "react";
import { GoMarkGithub } from "react-icons/go";

import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="Footer">
      <p className="built_by">
        <a
          href="https://github.com/martamd-front/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub className="icon" /> Open-source code
        </a>
        by Marta Muñoz
      </p>
    </footer>
  );
}
