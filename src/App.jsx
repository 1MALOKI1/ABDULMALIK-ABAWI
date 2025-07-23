import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        <div className="header-container">
          <div className="logo-nav-container">
            <Link to="/" className="logo-link">
              <img 
                src="/tech hub logo-01.png" 
                alt="Tech Hub Logo"
                className="logo-img"
              />
            </Link>
            
            <nav className="nav-menu">
              <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/services" className="nav-link">Services</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/services" className="footer-link">Courses</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Tech Hub. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}
function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Tech Hub</h1>
          <p className="hero-subtitle">Your Gateway to Technology Learning</p>
          <button className="cta-button">Join Tech Hub</button>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Courses</h3>
            <p className="feature-description">Learn programming and tech skills</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3 className="feature-title">Projects</h3>
            <p className="feature-description">Build real-world applications</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Community</h3>
            <p className="feature-description">Connect with tech enthusiasts</p>
          </div>
        </div>
      </section>
    </>
  );
}
function AboutPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">About Tech Hub</h2>
      <p className="page-content">
        Tech Hub is a leading platform for technology education and community building.
        We offer comprehensive courses, hands-on projects, and a vibrant community
        for tech enthusiasts of all levels.
      </p>
    </div>
  );
}
function ServicesPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Online Courses</h3>
          <p>Interactive learning experiences</p>
        </div>
        <div className="service-card">
          <h3>Project Guidance</h3>
          <p>Real-world application development</p>
        </div>
        <div className="service-card">
          <h3>Career Support</h3>
          <p>Job placement assistance</p>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default App;