import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-text-footer">Dr. Monu <br/> <span>Yoga Wellness</span></span>
          </div>
          <p className="footer-desc">
            Transforming lives through the ancient wisdom of yoga. Join us to find your inner peace and physical strength.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/registration">Book Session</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="#">Online Yoga Classes</a></li>
            <li><a href="#">Personal Training</a></li>
            <li><a href="#">Meditation Sessions</a></li>
            <li><a href="#">Yoga Therapy</a></li>
            <li><a href="#">Corporate Wellness</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li><MapPin size={18} /> SALEM</li>
            <li><Phone size={18} /> 99949 81659</li>
            <li><Mail size={18} /> info@drmonuyoga.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dr. Monu Yoga Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
