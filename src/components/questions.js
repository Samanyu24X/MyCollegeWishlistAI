const questions = [
  {
    id: 'gpa',
    question: 'What is your weighted GPA?',
    answerType: 'slider',
    min: 0.0,
    max: 5.0,
    step: 0.1,
  },
  {
    id: 'satScoreEnglish',
    question: 'What is your SAT Reading and Writing score?',
    answerType: 'slider',
    min: 200,
    max: 800,
    step: 10,
  },
  {
    id: 'satScoreMath',
    question: 'What is your SAT Math score?',
    answerType: 'slider',
    min: 200,
    max: 800,
    step: 10,
  },
  {
    id: 'states',
    question: 'Select up to 3 states where you are interested in attending college',
    answerType: 'multiselect',
    maxSelections: 3,
    options: [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
      'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
      'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
      'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
      'Wisconsin', 'Wyoming'
    ]
  },
  {
    id: 'firstChoiceMajor',
    question: 'What is your first choice for a major?',
    answerType: 'dropdown',
    options: [
      'Biological Sciences', 'Biology', 'Biomedical Engineering', 'Chemical Engineering', 'Chemistry',
      'Computer Science', 'Data Science', 'Engineering', 'Environmental Science', 'Mathematics',
      'Mechanical Engineering', 'Physics', 'Statistics', 'Art History', 'Creative Writing',
      'English', 'Fine Arts', 'Graphic Design', 'History', 'Journalism', 'Linguistics', 'Music',
      'Philosophy', 'Theatre', 'Anthropology', 'Economics', 'Geography', 'International Relations',
      'Political Science', 'Psychology', 'Sociology', 'Accounting', 'Business Administration',
      'Entrepreneurship', 'Finance', 'Human Resources', 'International Business', 'Management',
      'Marketing', 'Supply Chain Management', 'Allied Health', 'Health Education', 'Health Sciences',
      'Nursing', 'Public Health', 'Early Childhood Education', 'Elementary Education',
      'Secondary Education', 'Special Education', 'Teacher Education', 'Advertising',
      'Broadcasting', 'Communication Studies', 'Public Relations', 'Digital Humanities',
      'Environmental Studies', 'Global Studies', 'Neuroscience', 'Sustainability', 'Architecture',
      'Design', 'Film Studies', 'Game Design', 'Information Technology', 'Library Science',
      'Museum Studies', 'Urban Planning'
    ]
  },
  {
    id: 'secondChoiceMajor',
    question: 'If you were unable to pursue your first choice, what would your second choice for a major be?',
    answerType: 'dropdown',
    options: [
      'Biological Sciences', 'Biology', 'Biomedical Engineering', 'Chemical Engineering', 'Chemistry',
      'Computer Science', 'Data Science', 'Engineering', 'Environmental Science', 'Mathematics',
      'Mechanical Engineering', 'Physics', 'Statistics', 'Art History', 'Creative Writing',
      'English', 'Fine Arts', 'Graphic Design', 'History', 'Journalism', 'Linguistics', 'Music',
      'Philosophy', 'Theatre', 'Anthropology', 'Economics', 'Geography', 'International Relations',
      'Political Science', 'Psychology', 'Sociology', 'Accounting', 'Business Administration',
      'Entrepreneurship', 'Finance', 'Human Resources', 'International Business', 'Management',
      'Marketing', 'Supply Chain Management', 'Allied Health', 'Health Education', 'Health Sciences',
      'Nursing', 'Public Health', 'Early Childhood Education', 'Elementary Education',
      'Secondary Education', 'Special Education', 'Teacher Education', 'Advertising',
      'Broadcasting', 'Communication Studies', 'Public Relations', 'Digital Humanities',
      'Environmental Studies', 'Global Studies', 'Neuroscience', 'Sustainability', 'Architecture',
      'Design', 'Film Studies', 'Game Design', 'Information Technology', 'Library Science',
      'Museum Studies', 'Urban Planning'
    ]
  },
  {
    id: 'thirdChoiceMajor',
    question: 'If you also had to consider a third option, what would your third choice for a major be?',
    answerType: 'dropdown',
    options: [
      'Biological Sciences', 'Biology', 'Biomedical Engineering', 'Chemical Engineering', 'Chemistry',
      'Computer Science', 'Data Science', 'Engineering', 'Environmental Science', 'Mathematics',
      'Mechanical Engineering', 'Physics', 'Statistics', 'Art History', 'Creative Writing',
      'English', 'Fine Arts', 'Graphic Design', 'History', 'Journalism', 'Linguistics', 'Music',
      'Philosophy', 'Theatre', 'Anthropology', 'Economics', 'Geography', 'International Relations',
      'Political Science', 'Psychology', 'Sociology', 'Accounting', 'Business Administration',
      'Entrepreneurship', 'Finance', 'Human Resources', 'International Business', 'Management',
      'Marketing', 'Supply Chain Management', 'Allied Health', 'Health Education', 'Health Sciences',
      'Nursing', 'Public Health', 'Early Childhood Education', 'Elementary Education',
      'Secondary Education', 'Special Education', 'Teacher Education', 'Advertising',
      'Broadcasting', 'Communication Studies', 'Public Relations', 'Digital Humanities',
      'Environmental Studies', 'Global Studies', 'Neuroscience', 'Sustainability', 'Architecture',
      'Design', 'Film Studies', 'Game Design', 'Information Technology', 'Library Science',
      'Museum Studies', 'Urban Planning'
    ]
  },
  {
    id: 'minors',
    question: 'Please specify minors you would like to pursue.',
    answerType: 'dropdown',
    options: [
      'Not interested in a minor', 'Biological Sciences', 'Biology', 'Biomedical Engineering', 'Chemical Engineering', 'Chemistry',
      'Computer Science', 'Data Science', 'Engineering', 'Environmental Science', 'Mathematics',
      'Mechanical Engineering', 'Physics', 'Statistics', 'Art History', 'Creative Writing',
      'English', 'Fine Arts', 'Graphic Design', 'History', 'Journalism', 'Linguistics', 'Music',
      'Philosophy', 'Theatre', 'Anthropology', 'Economics', 'Geography', 'International Relations',
      'Political Science', 'Psychology', 'Sociology', 'Accounting', 'Business Administration',
      'Entrepreneurship', 'Finance', 'Human Resources', 'International Business', 'Management',
      'Marketing', 'Supply Chain Management', 'Allied Health', 'Health Education', 'Health Sciences',
      'Nursing', 'Public Health', 'Early Childhood Education', 'Elementary Education',
      'Secondary Education', 'Special Education', 'Teacher Education', 'Advertising',
      'Broadcasting', 'Communication Studies', 'Public Relations', 'Digital Humanities',
      'Environmental Studies', 'Global Studies', 'Neuroscience', 'Sustainability', 'Architecture',
      'Design', 'Film Studies', 'Game Design', 'Information Technology', 'Library Science',
      'Museum Studies', 'Urban Planning'
    ]
  }
];

export default questions;