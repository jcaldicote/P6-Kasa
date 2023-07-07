import React from "react";
import { AboutBanner } from "../components/Banner.jsx";
import "./About.scss";
import { Collapse } from "../components/Collapse.jsx";

export default function About() {
  return (
    <>
      <AboutBanner />
      <div className="collapse-container">
        <Collapse />
      </div>
    </>
  );
}
