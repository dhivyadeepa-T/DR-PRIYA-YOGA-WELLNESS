import { Link } from 'react-router-dom';
import { Leaf, Video, Clock, Heart } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <span className="subtitle">Welcome to Dr. Monu Yoga Wellness</span>
            <h1 className="hero-title">
              Transform Your Mind, Body & Life Through <span>Yoga</span>
            </h1>
            <p className="hero-desc">
              Discover the ancient wisdom of yoga with expert guidance. Join our holistic wellness community to find your balance, strength, and inner peace.
            </p>
            <div className="hero-btns">
              <Link to="/registration" className="btn btn-primary">Book Session</Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-backdrop"></div>
            {/* Placeholder for yoga meditation image */}
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Yoga Meditation" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section bg-soft">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Experience the transformative power of our comprehensive yoga and wellness programs.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Leaf size={32} /></div>
              <h3>Expert Guidance</h3>
              <p>Learn from certified instructors with years of experience in traditional and modern yoga practices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Video size={32} /></div>
              <h3>Online Sessions</h3>
              <p>Practice from the comfort of your home with our high-quality interactive online classes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Clock size={32} /></div>
              <h3>Flexible Timings</h3>
              <p>Choose from multiple batches throughout the day that fit perfectly into your busy schedule.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Heart size={32} /></div>
              <h3>Holistic Wellness</h3>
              <p>Beyond physical postures, we focus on breathwork, meditation, and overall lifestyle balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Limbs Section */}
      <section className="eight-limbs section">
        <div className="container">
          <h2 className="section-title">The Eight Limbs of Yoga</h2>
          <p className="section-subtitle">Patanjali's guide to a meaningful and purposeful life.</p>
          
          <div className="limbs-grid">
            {[
              { title: "Yama", desc: "Universal morality and ethical standards" },
              { title: "Niyama", desc: "Personal observances and self-discipline" },
              { title: "Asana", desc: "Physical postures to purify the body" },
              { title: "Pranayama", desc: "Breath control and life force expansion" },
              { title: "Pratyahara", desc: "Withdrawal of senses from external objects" },
              { title: "Dharana", desc: "Focused concentration of the mind" },
              { title: "Dhyana", desc: "Uninterrupted meditation and reflection" },
              { title: "Samadhi", desc: "Union with the divine, ultimate bliss" }
            ].map((limb, index) => (
              <div className="limb-card" key={index}>
                <div className="limb-number">0{index + 1}</div>
                <h3>{limb.title}</h3>
                <p>{limb.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Quote Section */}

<section className="quote-section section">

  <div className="container">

    <h2 className="section-title">
      Wisdom of Patanjali
    </h2>

    <p className="section-subtitle">
      Inspiring teachings from The Yoga Sutras
    </p>

    <div className="quotes-grid">

      <div className="quote-card">

        <p className="quote-text">

         "When inspired by a great purpose, Your consciousness expands in every direction.",
        </p>

        <span className="quote-author">

          – Patanjali

        </span>

      </div>

      <div className="quote-card">

        <p className="quote-text">

        "Be happy for those who are happy. Be compassionate toward those who are unhappy.",

        </p>

        <span className="quote-author">

          – Patanjali

        </span>

      </div>

      <div className="quote-card">

        <p className="quote-text">

        "Yoga is the cessation of the movements of the mind. Then there is abiding in the Seer's own form."

        </p>

        <span className="quote-author">

          – Patanjali

        </span>

      </div>

    </div>

  </div>

</section>

      {/* Testimonials Section */}
      <section className="testimonials section bg-soft">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">Real experiences from our beautiful community of practitioners.</p>
          
          <div className="testimonials-grid">
            {[
              { name: "Sarah Jenkins", role: "Regular Practitioner", text: "Dr. Monu’s yoga sessions have brought a positive transformation to my life. improve a peaceful mindset through regular practice."},
              { name: "Michael Chang", role: "Online Student", text: "The online sessions are incredible. The attention to detail and personal corrections make it feel like an in-person class." },
              { name: "Priya Sharma", role: "Advanced Yogi", text: "The focus on traditional philosophy combined with modern anatomical understanding sets this wellness center apart." }
            ].map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container cta-container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join us today and take the first step towards a healthier, more balanced life.</p>
          <Link to="/registration" className="btn btn-accent btn-large">Book Your First Session</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
