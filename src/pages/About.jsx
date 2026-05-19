import { CheckCircle2 } from 'lucide-react';
import './About.css';
import drPriya from "../assets/dr priya.jpeg";

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover our journey, mission, and the philosophy that guides us.</p>
        </div>
      </div>

      {/* Trainer Intro */}
      <section className="section about-intro">
        <div className="container about-container">
          <div className="about-image-col">
            <img 
              src={drPriya}
              alt="Dr. Monu" 
              className="about-img"
            />
          </div>
          <div className="about-content-col">
            <span className="subtitle">Meet Your Guide</span>
            <h2 className="section-title text-left">Dr. Monu</h2>
            <p className="about-text">
             Welcome to Dr. Monu Yoga Wellness, a space dedicated to holistic healing, natural wellness, and mindful living. Guided by the principles of Yoga and Naturopathy, we aim to help individuals achieve balance in body, mind, and soul through natural therapies and yogic practices.
            </p>
            <p className="about-text">
              Dr. Monu, BNYS
(Bachelor of Naturopathy and Yoga Sciences)
With a passion for preventive healthcare and wellness education, Dr. Monu combines traditional yogic wisdom with naturopathic healing techniques to support a healthier and more peaceful lifestyle.
              </p>
            
            <div className="achievements">
              <div className="achievement-item">
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
              <div className="achievement-item">
                <h3>200+</h3>
                <p>Happy Students</p>
              </div>
              <div className="achievement-item">
                <h3>20+</h3>
                <p>Workshops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-soft mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>To inspire and empower people to embrace natural healing, inner peace, and healthy living through the transformative power of yoga and naturopathy.
<br></br>• Heal Naturally • Breathe Deeply • Live Mindfully </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>To create a global community of mindful individuals who radiate peace, compassion, and well-being, fostering a healthier and more harmonious world.</p>
            </div>
          </div>
        </div>
      </section>
{/* Focus Areas */}
<section className="focus-section">
  <div className="container">

    <h2 className="section-title">Our Focus Areas</h2>
    <p className="section-subtitle">
      We provide holistic wellness programs for body, mind, and lifestyle balance.
    </p>

    <div className="focus-grid">

      <div className="focus-card">
        <h3>Yoga Therapy</h3>
        <p>Personalized yoga practices for healing and strength.</p>
      </div>

      <div className="focus-card">
        <h3>Pranayama & Meditation</h3>
        <p>Breathing techniques for calm mind and focus.</p>
      </div>

      <div className="focus-card">
        <h3> Stress Management</h3>
        <p>Guidance for balanced and stress-free living.</p>
      </div>
      <div className="focus-card">
  <h3>Lifestyle Management</h3>
  <p>Simple habits for healthy, stress-free living.</p>
</div>
      <div className="focus-card">
        <h3>Natural Healing Therapies</h3>
        <p>Holistic methods to restore natural health.</p>
      </div>

      <div className="focus-card">
        <h3>Women’s Wellness</h3>
        <p>Special care programs for women’s health.</p>
      </div>

      <div className="focus-card">
        <h3>Weight Management</h3>
        <p>Healthy lifestyle and sustainable fitness plans.</p>
      </div>

      <div className="focus-card">
        <h3>Holistic Health Guidance</h3>
        <p>Complete mind-body wellness approach.</p>
      </div>

    </div>
  </div>
</section>
      {/* Benefits */}
      <section className="section benefits">
        <div className="container">
          <h2 className="section-title">The Benefits of Our Practice</h2>
          <p className="section-subtitle">Regular practice at our wellness center yields profound transformations across all levels of your being.</p>
          
          <div className="benefits-grid">
            {[
              "Improved flexibility and balance",
              "Reduced stress and anxiety",
              "Enhanced mental clarity and focus",
              "Better sleep quality",
              "Increased physical strength",
              "Boosted immune system",
              "Emotional healing and stability",
              "Spiritual awakening and inner peace"
            ].map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <CheckCircle2 className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
