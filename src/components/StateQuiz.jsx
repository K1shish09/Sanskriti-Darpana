import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Ques.css";
import Navbar from "./../components/Navbar";
import { FaClock, FaStar } from "react-icons/fa";

const questions = [
  {
    id: 1,
    question: "In which year did the first Indian satellite, Aryabhata, launch?",
    options: ["1972", "1975", "1980", "1984"],
    answer: "1975",
    explanation: "India's first satellite, Aryabhata, was launched on April 19, 1975, by the Soviet Union.",
  },
  {
    id: 2,
    question: "Who was the first woman Prime Minister of India?",
    options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Kiran Bedi"],
    answer: "Indira Gandhi",
    explanation: "Indira Gandhi was the first and only female Prime Minister of India, serving from 1966 to 1977 and from 1980 until 1984.",
  },
  // Add other questions with unique IDs...
];

const Ques = () => {
  const { id } = useParams();
  const questionIndex = questions.findIndex((q) => q.id === parseInt(id)) || 0;
  const [currentQuestion, setCurrentQuestion] = useState(questionIndex);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (timer > 0 && selectedOption === null && !quizFinished) {
      const countdown = setInterval(() => setTimer((prevTime) => prevTime - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0 && selectedOption === null && !quizFinished) {
      handleNextQuestion();
    }
  }, [timer, selectedOption, quizFinished]);

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
    } else {
      setQuizFinished(true);
      setTimer(0);
    }
  };

  return (
    <>
      <Navbar />
      <div className="quiz-container mt-8">
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

        {!quizFinished && (
          <div className="question-card p-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white shadow-xl w-full">
            <h2 className="question text-xl mb-4">
              Question {currentQuestion + 1}: {questions[currentQuestion].question}
            </h2>

            <div className="options-container grid grid-cols-2 gap-4 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button w-full p-4 rounded-xl shadow-md ${selectedOption
                    ? option === questions[currentQuestion].answer
                      ? "bg-green-100"
                      : option === selectedOption
                      ? "bg-red-100"
                      : "bg-teal-100"
                    : "bg-teal-100"}`}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOption !== null}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="explanation-section mt-4 p-4 bg-white text-gray-700 rounded-lg shadow-lg">
                <p>{selectedOption === questions[currentQuestion].answer ? "Correct! Well done." : "Incorrect"}</p>
                <p>{questions[currentQuestion].explanation}</p>
              </div>
            )}

            <button
              className="next-button w-full p-4 bg-pink-500 text-white rounded-xl shadow-md mt-6"
              onClick={handleNextQuestion}
              disabled={!showExplanation}
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          </div>
        )}

        {quizFinished && (
          <div className="quiz-result">
            <p className="score">Your Final Score: {score} / {questions.length}</p>
            <p className="thank-you">Thank you for visiting!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Ques;