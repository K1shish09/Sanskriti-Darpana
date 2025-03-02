import React, { useState, useEffect } from 'react';
import { quiz } from './state-MCQ'; // Adjust path if needed
import { FaStar, FaClock } from 'react-icons/fa';

const StateMCQ = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNextQuestion();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    if (index === quiz[currentQuestionIndex].answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
    setTimeout(handleNextQuestion, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setTimeLeft(10);
    } else {
      alert(`Quiz finished! Your score: ${score} / ${quiz.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
      setTimeLeft(10);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-pink-600 ">
      <div className="quiz-container mt-8 w-full max-w-2xl px-6">
        {/* Score and Timer */}
        <div className="flex justify-around items-center mb-6 text-lg">
          <div className="flex items-center gap-3 p-3 bg-pink-500 text-white rounded-lg shadow-md w-1/3">
            <FaStar className="text-2xl" />
            <span>Score: {score}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-pink-500 text-white rounded-lg shadow-md w-1/3">
            <FaClock className="text-2xl" />
            <span>Time Left: {timeLeft}s</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="p-6 bg-pink-600 rounded-xl text-yellow-400 ">
          <h2 className="text-xl mb-4">
            Question {currentQuestionIndex + 1}: {quiz[currentQuestionIndex].question}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {quiz[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`relative w-full p-4 rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 ${
                  selectedOption !== null
                    ? index === quiz[currentQuestionIndex].answer
                      ? "bg-yellow-500"
                      : index === selectedOption
                      ? "bg-pink-300"
                      : "bg-pink-600"
                    : "bg-pink-500 hover:bg-teal-600"
                }`}
                onClick={() => handleOptionClick(index)}
                disabled={selectedOption !== null}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>

          {/* Show Correct Answer on Wrong Selection */}
          {isCorrect === false && (
            <div className="mt-4 p-3 bg-white text-gray-800 rounded-lg shadow-lg">
              ❌ Incorrect! The correct answer is:{" "}
              <span className="font-bold text-green-600">{quiz[currentQuestionIndex].options[quiz[currentQuestionIndex].answer]}</span>
            </div>
          )}

          {isCorrect === true && (
            <div className="mt-4 p-3 bg-green-600 text-white rounded-lg shadow-lg">
              ✅ Correct! Moving to the next question...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StateMCQ;
