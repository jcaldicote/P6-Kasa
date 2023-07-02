import { NavLink } from 'react-router-dom';
import './DevNavBar.scss';

/**
 * A navbar used in dev to rapidly navigate between pages.
 * @param {Object} props - The props object.
 * @param {string} props.links - The links to display in the navbar
 */

export default function DevNavBar({ links }) {
  return (
    <div className="dev-navbar">
      {links.map((link, index) => (
        <NavLink key={index} to={link}>
          {link}
        </NavLink>
      ))}
    </div>
  );
}
