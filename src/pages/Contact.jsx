import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you on your wellness journey. Reach out to us anytime.</p>
        </div>
      </div>

      <section className="section bg-soft">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-desc">
                Have questions about our classes, schedules, or therapies? Feel free to drop us a message or visit our center.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div>
                    <h3>Our Location</h3>
                    <p>123 Peace Avenue, Wellness City, 10001</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div>
                    <h3>Phone & WhatsApp</h3>
                    <p>99949 81659</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div>
                    <h3>Email Address</h3>
                    <p>info@drmonuyoga.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Clock size={24} /></div>
                  <div>
                    <h3>Working Hours</h3>
                    <p>Mon - Sat: 09:00 AM - 09:30 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <h3>Send a Message</h3>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <h3>Dr. Monu Yoga Wellness Center</h3>
            <p>123 Peace Avenue, Wellness City, 10001</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
