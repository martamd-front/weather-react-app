import React from "react";
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
          Open-source code
        </a>
        by Marta Muñoz
      </p>
    </footer>
  );
}
