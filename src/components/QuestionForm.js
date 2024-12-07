import React, { useState, useEffect, useMemo } from 'react';
import questions from './questions';
import OutputPage from './OutputPage';

const QuestionForm = () => {
  const initialFormData = questions.reduce((acc, q) => {
    // Special handling for states
    if (q.id === 'states') {
      acc[q.id] = [];
    } else {
      acc[q.id] = '';
    }
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [isListening, setIsListening] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const recognition = useMemo(() => {
    const recog = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recog.interimResults = true;
    return recog;
  }, []);

  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript;
      const isFinal = event.results[event.resultIndex].isFinal;
      if (isFinal) {
        setFormData((prevData) => ({
          ...prevData,
          collegePreferences: (prevData.collegePreferences || '') + ' ' + transcript,
        }));
      }
    };
    recognition.onend = () => {
      setIsListening(false);
    };
    recognition.onerror = (event) => {
      console.error('Speech recognition error', event);
    };
  }, [recognition]);

  const handleStartListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const handleStopListening = () => {
    recognition.stop();
  };

  const handleStateChange = (state) => {
    setFormData(prev => {
      const currentStates = prev.states || [];
      if (currentStates.includes(state)) {
        // Deselect if already selected
        return {
          ...prev,
          states: currentStates.filter(s => s !== state)
        };
      }
      // Select if not at max and not already selected
      if (currentStates.length < 3) {
        return {
          ...prev,
          states: [...currentStates, state]
        };
      }
      // If already at max, do nothing
      return prev;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendationsData = {
      stretch: [{ name: 'Harvard University', location: 'Cambridge, MA', ranking: 1 }],
      target: [{ name: 'University of Michigan', location: 'Ann Arbor, MI', ranking: 25 }],
      safety: [{ name: 'University of Texas', location: 'Austin, TX', ranking: 50 }]
    };
    setRecommendations(recommendationsData);
    setSubmitted(true);
  };

  if (submitted && recommendations) {
    return <OutputPage recommendations={recommendations} />;
  }

  // Find the states question
  const statesQuestion = questions.find(q => q.id === 'states');

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-12 text-white">
      <div className="w-3/4 mx-auto px-12">
        <div className="bg-white rounded-lg shadow-lg p-10 transition-all transform hover:scale-105 backdrop-blur-lg bg-opacity-20">
          <h2 className="text-4xl font-extrabold text-center text-white mb-8">Discover Your College Match</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {questions.map((q) => (
              <div key={q.id} className="space-y-4">
                <label className="text-xl font-semibold text-white">{q.question}</label>
                {q.answerType === 'textbox' && (
                  <input
                    type="text"
                    value={formData[q.id]}
                    onChange={(e) => setFormData({ ...formData, [q.id]: e.target.value })}
                    placeholder={q.placeholder}
                    className="w-full p-4 bg-black bg-opacity-40 text-white rounded-lg shadow-inner focus:ring-pink-500 focus:border-pink-500"
                  />
                )}
                {q.answerType === 'dropdown' && (
                  <select
                    value={formData[q.id]}
                    onChange={(e) => setFormData({ ...formData, [q.id]: e.target.value })}
                    className="w-full h-12 p-4 bg-black bg-opacity-40 text-white rounded-lg shadow-inner focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select an option</option>
                    {q.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
                {q.answerType === 'slider' && (
                  <>
                    <input
                      type="range"
                      min={q.min}
                      max={q.max}
                      step={q.step}
                      value={formData[q.id]}
                      onChange={(e) => setFormData(prev => ({ ...prev, [q.id]: e.target.value }))}
                      className="w-full mt-2 slider-thumb transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-500 to-indigo-500"
                    />
                    <div className="text-gray-300 text-sm mt-1">{formData[q.id]}</div>
                  </>
                )}
              </div>
            ))}
            {/* Rest of the form remains the same */}
            <div>
              <label htmlFor="collegePreferences" className="text-lg font-medium">
                What do you want in a college?
              </label>
              <textarea
                id="collegePreferences"
                value={formData.collegePreferences || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, collegePreferences: e.target.value }))}
                placeholder="Describe your preferences..."
                className="w-full h-32 mt-4 p-4 bg-black bg-opacity-40 text-white rounded-lg shadow-inner focus:ring-pink-500 focus:border-pink-500"
              />
              <button
                type="button"
                onClick={isListening ? handleStopListening : handleStartListening}
                className={`mt-4 py-3 px-6 rounded-lg ${isListening ? 'bg-red-600' : 'bg-pink-600'} text-white font-bold transition-transform transform hover:scale-105`}
              >
                {isListening ? 'Stop Recording' : 'Start Recording'}
              </button>
              <span className="ml-4 text-gray-400">Too much to type? Use speech-to-text!</span>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-purple-800 text-white py-4 px-6 rounded-lg mt-8 font-bold shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;