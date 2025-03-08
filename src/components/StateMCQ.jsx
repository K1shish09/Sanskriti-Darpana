import React, { useState, useEffect } from "react";
import "./StateQuiz.css";
import Navbar from "./../components/Navbar";
import { FaClock, FaStar } from "react-icons/fa";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";
import quizData from "./state-MCQ"; // Import the quiz data

const StateMCQ = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(240); // 4 minutes
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Find the quiz data for the given id
    const stateQuiz = quizData.find((quiz) => quiz.id === id);
    if (stateQuiz) {
      setQuestions(stateQuiz.questions.sort(() => 0.5 - Math.random()).slice(0, 10));
    }
  }, [id]);

  useEffect(() => {
    if (timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setQuizFinished(true);
    }
  }, [timeLeft]);

  const handleOptionClick = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      setAnsweredQuestions({ ...answeredQuestions, [currentQuestion]: true });

      if (option === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const unansweredCount = questions.length - Object.keys(answeredQuestions).length;

  return (
    <>
      <Navbar />
      <div className="quiz-container mt-8">
        <div className="flex justify-around items-center mb-6 text-lg mt-10">
          <div className="score-display flex items-center gap-3 p-3 rounded-lg shadow-md w-1/3">
            <FaStar className="text-2xl" />
            <span>Score: {score}</span>
          </div>
          <div className="timer-display flex items-center gap-3 p-3 rounded-lg shadow-md w-1/3">
            <FaClock className="text-2xl" />
            <span>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}</span>
          </div>
        </div>

        {!quizFinished ? (
          <div className="question-card p-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white shadow-xl w-full">
            <h2 className="question text-xl mb-4">
              Question {currentQuestion + 1}: {questions[currentQuestion]?.question}
            </h2>

            <div className="options-container grid grid-cols-2 gap-4 mb-6">
              {questions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button w-full p-4 bg-white text-gray-700 rounded-xl shadow-md hover:scale-105 transition ${selectedOption !== null
                    ? option === questions[currentQuestion].correctAnswer
                      ? "bg-green-300 border-2 border-green-700" // ✅ Correct Answer Highlight
                      : option === selectedOption
                        ? "bg-red-300 border-2 border-red-700" // ❌ Wrong Answer Highlight
                        : "bg-white"
                    : "bg-teal-100"
                    }`}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOption !== null}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>

            {/* Explanation Box (Shows After Answering) */}
            {selectedOption !== null && (
              <div className="explanation-section p-4 text-gray-800 rounded-lg shadow-lg bg-gray-100">
                <p>
                  <strong>Correct Answer:</strong> {questions[currentQuestion].correctAnswer}
                </p>
                <p className="mt-2">{questions[currentQuestion].explanation}</p>
              </div>
            )}

            {/* Previous & Next Buttons */}
            <div className="navigation-buttons flex justify-between mt-6">
              <button
                className={`prev-button w-1/3 p-4 rounded-xl shadow-lg transition-all text-white text-lg font-semibold ${currentQuestion === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 transform hover:scale-105"
                  }`}
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                ⬅ Previous
              </button>
              <button
                className={`next-button w-1/3 p-4 rounded-xl text-white text-lg font-semibold shadow-lg transition-all ${selectedOption === null ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 transform hover:scale-105"
                  }`}
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
              >
                {currentQuestion === questions.length - 1 ? "Finish ✅" : "Next ➡"}
              </button>
            </div>
          </div>
        ) : (
          <div className="final-results text-center">
            <Confetti />
            <h2>🎉 Quiz Completed! 🎉</h2>
            <p className="score-breakdown">Your Final Score: {score} / {questions.length}</p>
            <div className="progress-bar">
              <div className="fill" style={{ width: `${(score / questions.length) * 100}%` }}></div>
            </div>
            {score === questions.length ? (
              <p className="appreciation">🌟 Perfect Score! You're a quiz master! 🌟</p>
            ) : score >= questions.length * 0.7 ? (
              <p className="appreciation">💪 Great job! Almost perfect!</p>
            ) : score >= questions.length * 0.5 ? (
              <p className="appreciation">😊 Good effort! Keep practicing.</p>
            ) : (
              <p className="appreciation">📚 Keep learning! You'll improve.</p>
            )}
            <p className="celebration">🎊 Well done! 🎊</p>
            <p className="thank-you-message">🚀 Thanks for playing! See you next time! 🚀</p>
          </div>
        )}
      </div>
    </>
  );
};

export default StateMCQ;