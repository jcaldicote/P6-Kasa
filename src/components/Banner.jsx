import React from "react";
import ImgMainBanner from "../assets/imghome.png";
import "./Banner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <img
        src={ImgMainBanner}
        alt="banner-Kasa-Main"
        className="main-banner__img"
      />
      <h2 className="main-banner__txt">Chez vous, partout et ailleurs</h2>
    </div>
  );
}
