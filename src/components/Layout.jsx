// import { children } from 'react';
import DevNavBar from './DevNavBar';
import Footer from './Footer';
import NavBar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <DevNavBar links={['/', '/logement', '/about', '/!!!']} />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
