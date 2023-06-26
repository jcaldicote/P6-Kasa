import React from "react";
import Navbar from "./components/Navbar";
import MainBanner from "./components/Banner";
import Footer from "./components/Footer.jsx";

import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <Footer />
    </div>
  );
}

export default App;
