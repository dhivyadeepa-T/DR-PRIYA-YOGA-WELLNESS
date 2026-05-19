import { useState } from 'react';
import { Search, Calendar, ChevronRight } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Mindful Breathing",
    desc: "Discover how pranayama techniques can physically alter your brain structure and reduce stress levels.",
    date: "May 10, 2026",
    category: "Pranayama",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "5 Asanas for Better Digestion",
    desc: "Struggling with gut health? These five simple yoga postures can help stimulate digestion and relieve bloating.",
    date: "May 02, 2026",
    category: "Asana",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Yoga Philosophy: Understanding the Yamas",
    desc: "The first limb of yoga provides a strong ethical foundation for living a meaningful life in modern society.",
    date: "April 28, 2026",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Creating a Home Practice Space",
    desc: "Tips on setting up a serene, distraction-free corner in your home dedicated entirely to your daily practice.",
    date: "April 15, 2026",
    category: "Lifestyle",
    image: "https://images.squarespace-cdn.com/content/v1/5737f1bab654f9749a55a048/a42eb9bb-ac1d-49b3-b29a-c050ecc88e6f/IMG_1585.jpg"
  },
  {
    id: 5,
    title: "Meditation for Beginners",
    desc: "Finding it hard to sit still? Try this gentle 10-minute guided meditation guide for absolute beginners.",
    date: "April 05, 2026",
    category: "Meditation",
    image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "The Importance of Rest: Savasana",
    desc: "Why the final resting pose is often considered the most difficult, yet most important posture in yoga.",
    date: "March 22, 2026",
    category: "Asana",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800&auto=format&fit=crop"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-page">
      <div className="page-header">
        <div className="container">
          <h1>Wellness Blog</h1>
          <p>Insights, guides, and inspiration for your yogic journey.</p>
        </div>
      </div>

      <section className="section bg-soft">
        <div className="container">
          <div className="search-bar-container">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search articles by title or category..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div className="blog-card" key={post.id}>
                  <div className="blog-image-wrapper">
                    <img src={post.image} alt={post.title} className="blog-image" />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.desc}</p>
                    <button className="read-more">
                      Read More <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No articles found for "{searchTerm}"</h3>
                <p>Try adjusting your search terms.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
