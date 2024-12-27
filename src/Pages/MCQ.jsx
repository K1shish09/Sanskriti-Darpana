import React, { useState } from "react";
import "./MCQ.css";
import Navbar from './../components/Navbar.jsx';

const MCQ = () => {
  // Sample questions
  const questions = [
    {
      question: "What is the traditional footwear known for its durability and endurance in Maharashtra?",
      options: ["Kolhapuri Chappals","Leather Boots","Jutti","Sandals"],
      answer: 2, 
    },
    {
      question: "What is one of the key significance of folk dances in Maharashtra ?",
      options: ["Promoting global fashion trends", "Revitalizing rural economy", "Preserving ancient martial arts", "Modernizing traditional art forms"],
      answer: 1,
    },
   
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleViewResult = () => {
    setShowResult(true);
  };

  return (
    <><Navbar/><br></br>
    <div className="MCQ-container">
      {!showResult ? (
        <div className="mcq-container">
          <h2 className="question">{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`option ${selectedOption === index ? "selected" : ""}`}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={selectedOption === 0}>
              Next
            </button>
          </div>
          <button className="view-result" onClick={handleViewResult}>
            View Result
          </button>
        </div>
      ) : (
        <div className="result-container">
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div></>
  );
};

export default MCQ;
