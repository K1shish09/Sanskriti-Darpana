import React, { useState, useEffect } from "react";
import "./Ques.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { FaClock, FaStar } from "react-icons/fa";

const Quiz = () => {
  const questions = [
    // ... [your questions array]
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (timer > 0 && selectedOption === null) {
      const countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [timer, selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
    setTimer(0);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
      setTimer(30);
    }
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <>
      <Navbar />

      <div className="quiz-container mt-8">
        {/* Score and Timer */}
        <div className="flex justify-around items-center mb-6 text-lg mt-10">
          <div className="score-display flex items-center gap-3 p-3 bg-teal-400 text-white rounded-lg shadow-md w-1/3">
            <FaStar className="text-2xl" />
            <span>Score: {score}</span>
          </div>
          <div className="timer-display flex items-center gap-3 p-3 bg-teal-400 text-white rounded-lg shadow-md w-1/3">
            <FaClock className="text-2xl" />
            <span>Time Left: {timer}s</span>
          </div>
        </div>

        {/* Question Card */}
        {!quizFinished ? (
          <div className="question-card p-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white shadow-xl w-full">
            <h2 className="question text-xl mb-4">
              Question {currentQuestion + 1}: {questions[currentQuestion].question}
            </h2>

            <div className="options-container grid grid-cols-2 gap-4 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button relative w-full p-4 bg-white text-gray-700 rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl ${
                    selectedOption
                      ? option === questions[currentQuestion].answer
                        ? "bg-green-100"
                        : option === selectedOption
                        ? "bg-red-100"
                        : "bg-teal-100"
                      : "bg-teal-100"
                  }`}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOption !== null}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="explanation-section mt-4 p-4 bg-white text-gray-700 rounded-lg shadow-lg">
                <p>
                  {selectedOption === questions[currentQuestion].answer
                    ? "Correct! Well done."
                    : "Incorrect"}
                </p>
                <p>{questions[currentQuestion].explanation}</p>
              </div>
            )}

            <button
              className="next-button w-full p-4 bg-pink-500 text-white rounded-xl shadow-md mt-6 transform transition duration-500 hover:scale-105 hover:shadow-xl disabled:bg-gray-300"
              onClick={handleNextQuestion}
              disabled={!showExplanation}
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          </div>
        ) : (
          <div className="thank-you-section animated-thank-you p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white shadow-xl w-full">
            <h2 className="text-2xl font-bold">Thank You for Visiting!</h2>
            <p className="mt-4">Your final score is {score} out of {questions.length}.</p>
            <button
              className="p-4 bg-pink-500 text-white rounded-xl shadow-md mt-6"
              onClick={() => window.location.reload()}
            >
              Reload Quiz
            </button>
          </div>
        )}
      </div>

      {/* Move Footer Outside the Quiz Container */}
      <Footer />
    </>
  );
};

export default Quiz;
