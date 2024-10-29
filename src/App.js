import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuestionForm from './components/QuestionForm';
import OutputPage from './components/OutputPage';
import Navbar from './components/Navbar'; // Add Navbar
import Footer from './components/Footer'; // Add Footer
import './style.css';

function App() {
  const [showForm, setShowForm] = useState(false);
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
    <div className="App">
      <Navbar /> {/* Include Navbar */}
      {!showForm ? (
        <LandingPage onGetStarted={() => setShowForm(true)} />
      ) : !recommendations ? (
        <QuestionForm onFormSubmit={handleFormSubmit} />
      ) : (
        <OutputPage recommendations={recommendations} />
      )}
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default App;