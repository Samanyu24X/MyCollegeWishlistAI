import React, { useState, useEffect, useMemo } from 'react';
import questions from './questions';

const QuestionForm = () => {
  const initialFormData = questions.reduce((acc, q) => {
    acc[q.id] = ''; // Set each question ID as a key with an empty string as the initial value
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [isListening, setIsListening] = useState(false);

  // Use useMemo to create the recognition object only once
  const recognition = useMemo(() => {
    const recog = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recog.interimResults = true;
    return recog;
  }, []);

  // Speech recognition event handlers
  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript;
      const isFinal = event.results[event.resultIndex].isFinal; // Check if the result is final
  
      if (isFinal) {
        setFormData((prevData) => ({
          ...prevData,
          collegePreferences: prevData.collegePreferences + ' ' + transcript, // Append the new text
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };



  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="w-2/3 mx-auto px-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Tell Us About Yourself!</h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {questions.map((q) => (
              <div key={q.id} className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">{q.question}</label>
                {q.answerType === 'textbox' && (
                  <input
                    type="text"
                    value={formData[q.id]}
                    onChange={(e) => setFormData({ ...formData, [q.id]: e.target.value })}
                    placeholder={q.placeholder}
                    className="w-1/12 p-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
                {q.answerType === 'dropdown' && (
                  <select
                    value={formData[q.id]}
                    onChange={(e) => setFormData({ ...formData, [q.id]: e.target.value })}
                    className="w-1/6 h-8 p-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                      onChange={(e) => setFormData({ ...formData, [q.id]: e.target.value })}
                      className="w-1/6 p-1 mt-2"
                    />
                    <div className="text-gray-600 text-sm mt-1">{formData[q.id]}</div> {/* Displays current slider value */}
                  </>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="collegePreferences" className="text-base font-medium">
                What do you personally want in a college? Tell us about the activities, events, weather, or environments that interest you!
              </label>
              <textarea
                id="collegePreferences"
                value={formData.collegePreferences}
                onChange={(e) => setFormData({ ...formData, collegePreferences: e.target.value })}
                placeholder="ex: I want a college with a football team and warm weather. I also want to be near a city."
                className="w-full h-32 mt-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={isListening ? handleStopListening : handleStartListening}
                className={`py-2 px-4 rounded-md ${isListening ? 'bg-red-600' : 'bg-blue-600'} text-white`}
              >
                {isListening ? 'Stop Recording' : 'Start Recording'}
              </button>
              <span className="ml-4 text-gray-700">
                Too much to write down? Use this button for speech to text!
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
