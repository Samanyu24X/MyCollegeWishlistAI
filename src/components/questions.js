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
      id: 'satScore',
      question: 'What is your SAT score?',
      answerType: 'slider',
      min: 800,
      max: 1600,
      step: 10,
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
  