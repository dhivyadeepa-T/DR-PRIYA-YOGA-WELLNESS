import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/monu.jpeg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          {/* Using text logo as placeholder for the uploaded logo */}
          <img
  src={logo}
  alt="Dr Monu Yoga Wellness"
  className="logo-image"
/>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/registration" className="nav-links" onClick={() => setIsOpen(false)}>
              Registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-links" onClick={() => setIsOpen(false)}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item nav-btn-item">
            <NavLink to="/registration" className="btn btn-accent nav-btn" onClick={() => setIsOpen(false)}>
              Book Session
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;