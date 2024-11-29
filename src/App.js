import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import QuestionForm from './components/QuestionForm';
import OutputPage from './components/OutputPage';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import RatingPage from './components/RatingPage'; // Import the RatingPage
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.css';

function App() {
  const [recommendations, setRecommendations] = useState(null);

  const handleFormSubmit = (data) => {
    setRecommendations({
      stretch: [
        { name: 'Harvard University', location: 'Cambridge, MA', ranking: 1 },
        { name: 'Stanford University', location: 'Stanford, CA', ranking: 3 },
        { name: 'Yale University', location: 'New Haven, CT', ranking: 5 },
      ],
      target: [
        { name: 'University of Michigan', location: 'Ann Arbor, MI', ranking: 25 },
        { name: 'University of Southern California', location: 'Los Angeles, CA', ranking: 22 },
      ],
      safety: [
        { name: 'University of Texas', location: 'Austin, TX', ranking: 50 },
        { name: 'Arizona State University', location: 'Tempe, AZ', ranking: 65 },
      ],
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage onGetStarted={() => handleFormSubmit()} />} />
          <Route path="/form" element={<QuestionForm onFormSubmit={handleFormSubmit} />} />
          <Route path="/output" element={<OutputPage recommendations={recommendations} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rating" element={<RatingPage />} /> {/* Add this line for RatingPage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;