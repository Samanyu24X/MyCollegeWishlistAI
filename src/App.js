import React from 'react';
import QuestionForm from './components/QuestionForm';
import Results from './components/Results'; // Make sure to import Results correctly

function App() {
  return (
    <div className="App">
      <div className="flex-1 bg-gray-50 p-4">
        <QuestionForm />
      </div>
      <div className="bg-gray-200 p-4">
        <Results />
      </div>
    </div>
  );
}

export default App;