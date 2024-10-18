import React, { useState } from 'react';

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    experience: '',
    preference: '',
    frequency: '',
    feedback: ''
  });

  const questions = [
    {
      id: 'experience',
      question: 'Question 1',
      options: ['0-2 years', '3-5 years', '5+ years']
    },
    {
      id: 'preference',
      question: 'Question 2',
      options: ['VS Code', 'WebStorm', 'Sublime Text', 'Other']
    },
    {
      id: 'frequency',
      question: 'Question 3',
      options: ['Daily', 'Weekly', 'Monthly', 'Occasionally']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Developer Survey</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {questions.map((q) => (
              <div key={q.id} className="space-y-4">
                <label className="text-lg font-medium text-gray-700">
                  {q.question}
                </label>
                <div className="space-y-2">
                  {q.options.map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        type="radio"
                        id={`${q.id}-${option}`}
                        name={q.id}
                        value={option}
                        checked={formData[q.id] === option}
                        onChange={(e) => 
                          setFormData((prev) => ({ ...prev, [q.id]: e.target.value }))
                        }
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`${q.id}-${option}`}
                        className="ml-2 text-gray-600"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-4">
              <label className="text-lg font-medium text-gray-700">
                Open Text Area
              </label>
              <textarea
                value={formData.feedback}
                onChange={(e) => 
                  setFormData((prev) => ({ ...prev, feedback: e.target.value }))
                }
                className="w-full min-h-32 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your feedback here..."
              />
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