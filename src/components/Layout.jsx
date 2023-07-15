// import { children } from 'react';
import DevNavBar from "./DevNavBar";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <DevNavBar links={["/", "/logement/c67ab8a7", "/about", "/!!!"]} />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
