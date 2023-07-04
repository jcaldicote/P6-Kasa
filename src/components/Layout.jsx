// import { children } from 'react';
import DevNavBar from "./DevNavBar";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      {/* <DevNavBar
        links={[
          "/",
          "/logement",
          "/logement/c67ab8a7",
          "/logement/c67ab8!!!!",
          "/about",
          "/!!!",
        ]}
      /> */}
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
