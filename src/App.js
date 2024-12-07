import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // For routing
import LandingPage from './components/LandingPage';
import QuestionForm from './components/QuestionForm';
import OutputPage from './components/OutputPage';
import Navbar from './components/Navbar'; // Include Navbar
import Footer from './components/Footer'; // Include Footer
import './style.css';

function App() {
    const [recommendations, setRecommendations] = useState(null);

    const handleFormSubmit = (data) => {
        setRecommendations([
            { name: 'Harvard University', location: 'Cambridge, MA', ranking: 1 },
            { name: 'Stanford University', location: 'Stanford, CA', ranking: 3 },
            { name: 'Yale University', location: 'New Haven, CT', ranking: 5 },
            { name: 'University of Michigan', location: 'Ann Arbor, MI', ranking: 25 },
            { name: 'University of Southern California', location: 'Los Angeles, CA', ranking: 22 },
            { name: 'University of Texas', location: 'Austin, TX', ranking: 50 },
            { name: 'Arizona State University', location: 'Tempe, AZ', ranking: 65 },
        ]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Include Navbar */}
                <Routes>
                    {/* Landing Page */}
                    <Route
                        path="/"
                        element={<LandingPage onGetStarted={() => setRecommendations(null)} />}
                    />
                    {/* Question Form */}
                    <Route
                        path="/form"
                        element={<QuestionForm onFormSubmit={handleFormSubmit} />}
                    />
                    {/* Output Page */}
                    <Route
                        path="/output"
                        element={recommendations ? <OutputPage recommendations={recommendations} /> : <LandingPage />}
                    />
                </Routes>
                <Footer /> {/* Include Footer */}
            </div>
        </Router>
    );
}

export default App;