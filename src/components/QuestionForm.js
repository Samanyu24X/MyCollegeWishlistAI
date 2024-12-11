import React, { useState, useEffect, useMemo } from 'react';
import questions from './questions';
import OutputPage from './OutputPage'; // Ensure OutputPage is correctly imported

const QuestionForm = () => {
  const initialFormData = questions.reduce((acc, q) => {
    acc[q.id] = '';
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
          collegePreferences: prevData.collegePreferences + ' ' + transcript,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data contains your GPA, SAT, and state
    const payload = {
      // gpa: formData.gpa, // This maps to the gpa slider
      satScoreMath: formData.satScoreMath, // This maps to the SAT score slider
      satScoreEnglish: formData.satScoreEnglish,
      // state: formData.state,
      state: ["CA", "TX", "FL"],
    };

    try {
      const response = await fetch("http://localhost:5000/get_colleges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const recommendations = await response.json();
        console.log("Got DB query results, here they are:");
        console.log(recommendations);

        // Capture the collegePreferences textarea value
        const collegePreferences = formData.collegePreferences; // Assuming formData.collegePreferences holds the textarea value
        const numQuestions = 3;

        const apiAddress = "http://35.94.88.79/";
        const headers = {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "hfMDxX3B6paKtUM3g37xUbV_csMYwUaXQS7KtY3U4GM",
        };

        const apiResults = []; // this will hold a list of items, each item should have a college name as well as a description of the college

        // Loop through each recommendation and make an API call
        for (const college of recommendations) {
          const payload = {
            preferences: collegePreferences,
            num_questions: numQuestions,
            colleges: [college], // Assuming each recommendation has a `name` property
          };

          try {
            const apiResponse = await fetch(apiAddress, {
              method: "POST",
              headers: headers,
              body: JSON.stringify(payload),
            });

            if (apiResponse.ok) {
              const result = await apiResponse.json();
              console.log("API Response for College:", college.name, result);

              // Add the result to the apiResults list
              apiResults.push({
                collegeName: college.name,
                response: result,
              });
            } else {
              console.error("API Error for College:", college.name, apiResponse.statusText);
            }
          } catch (apiError) {
            console.error("Error calling API for College:", college.name, apiError);

            // Optionally, add an error object to the apiResults list
            apiResults.push({
              collegeName: college.name,
              response: { error: apiError.message },
            });
          }
        }

        // Log the full list of results
        console.log("All API Results:", apiResults);

        // Final steps after all API calls
        setRecommendations(apiResults); // Store results in state (or process them further)
        setSubmitted(true);
      } else {
        console.error("Error fetching recommendations:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  if (submitted && recommendations) {
    return <OutputPage recommendations={recommendations} />;
  }

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
                      onChange={(e) => setFormData({ ...formData, [q.id]: e.target.value })}
                      className="w-full mt-2 slider-thumb transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-500 to-indigo-500"
                    />
                    <div className="text-gray-300 text-sm mt-1">{formData[q.id]}</div>
                  </>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="collegePreferences" className="text-lg font-medium">
                What do you want in a college?
              </label>
              <textarea
                id="collegePreferences"
                value={formData.collegePreferences}
                onChange={(e) => setFormData({ ...formData, collegePreferences: e.target.value })}
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