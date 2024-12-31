import React, { useState, useEffect } from "react";
import "./Ques.css";
import Navbar from "./../components/Navbar";
import { FaClock, FaStar } from "react-icons/fa";

const Ques = () => {
  const questions = [
    {
      question: "In which year did the first Indian satellite, Aryabhata, launch?",
      options: ["1972", "1975", "1980", "1984"],
      answer: "1975",
      explanation:
        "India's first satellite, Aryabhata, was launched on April 19, 1975, by the Soviet Union from its cosmodrome.",
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Kiran Bedi"],
      answer: "Indira Gandhi",
      explanation: "Indira Gandhi was the first and only female Prime Minister of India, serving from 1966 to 1977 and from 1980 until her assassination in 1984.",
    },
    {
      question: "Which is the classical music tradition of the southern part of India?",
      options: ["Hindustani", "Carnatic", "Khyal", "Qawwali"],
      answer: "Carnatic",
      explanation: "Carnatic music is the classical music tradition of South India, characterized by its devotion-oriented compositions and the use of ragas and talas."
    },
    {
      question: "How many official languages are there in India?",
      options: ["20", "22", "24", "26"],
      answer: "22",
      explanation: "India recognizes 22 official languages under the Eighth Schedule of the Constitution, including Hindi, Bengali, Telugu, and Tamil."
    },
    {
      question: "What is the distance between the Earth and the Sun?",
      options: ["93 million miles", "100 million miles", "120 million miles", "150 million miles"],
      answer: "93 million miles",
      explanation: "The average distance between Earth and the Sun is about 93 million miles (or 150 million kilometers)."
    },
    {
      question: "Which Indian leader is associated with the slogan 'Jai Jawan Jai Kisan'?",
      options: ["Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi", "Lal Bahadur Shastri"],
      answer: "Lal Bahadur Shastri",
      explanation: "Lal Bahadur Shastri, the second Prime Minister of India, coined the slogan 'Jai Jawan Jai Kisan' to emphasize the importance of soldiers and farmers in the nation’s progress.",
    },
    {
      question: "How many years did the British rule over India?",
      options: ["150", "200", "250", "300"],
      answer: "200",
      explanation: "The British ruled over India for approximately 200 years, from 1757 (Battle of Plassey) until 1947 when India gained independence."
    },
    {
      question: "Which city is known as the 'City of Lakes'?",
      options: ["Jaipur", "Udaipur", "Kolkata", "Chennai"],
      answer: "Udaipur",
      explanation: "Udaipur, in Rajasthan, is known as the 'City of Lakes' due to its beautiful lakes and scenic views.",
    },
    {
      question: "Which Indian state is known for the 'Biryani' dish?",
      options: ["Hyderabad", "Delhi", "Maharashtra", "Punjab"],
      answer: "Hyderabad",
      explanation: "Hyderabad is famous for its rich and flavorful Biryani, a traditional rice dish made with meat and spices.",
    },
    {
      question: "Who was the founder of the Indian National Congress?",
      options: ["Allan Octavian Hume", "Lala Lajpat Rai", "Subhas Chandra Bose", "Mahatma Gandhi"],
      answer: "Allan Octavian Hume",
      explanation: "Allan Octavian Hume, a British civil servant, is considered one of the founding figures of the Indian National Congress in 1885.",
    },
    {
      question: "Which Indian state is known for the famous festival 'Onam'?",
      options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
      answer: "Kerala",
      explanation: "'Onam' is a major festival in Kerala, celebrated with cultural events, feasts, and traditional performances.",
    },
    {
      question: "What is the national emblem of India?",
      options: ["Lion Capital of Ashoka", "Lotus", "Peacock", "Kali Statue"],
      answer: "Lion Capital of Ashoka",
      explanation: "The national emblem of India is the Lion Capital of Ashoka, which symbolizes India's commitment to peace and unity.",
    },
    {
      question: "Who is known as the 'Mother of Indian Modern Dance'?",
      options: ["Uday Shankar", "Madhavi Mudgal", "Rukmini Devi Arundale", "Sonal Mansingh"],
      answer: "Rukmini Devi Arundale",
      explanation: "Rukmini Devi Arundale was a renowned Indian classical dancer and choreographer, credited with reviving Bharatanatyam and popularizing Indian classical dance across the world."
    },
    {
      question: "The Sun Temple is located in which Indian state?",
      options: ["Odisha", "Rajasthan", "Tamil Nadu", "Gujarat"],
      answer: "Odisha",
      explanation: "The Sun Temple, also known as Konark Temple, is located in Odisha.",
    },
    {
      question: "What was the name of the movement launched by Subhas Chandra Bose to free India from British rule?",
      options: ["Quit India Movement", "Non-Cooperation Movement", "Azad Hind Movement", "Civil Disobedience Movement"],
      answer: "Azad Hind Movement",
      explanation: "Subhas Chandra Bose led the Azad Hind Movement and formed the Indian National Army (INA) to fight against British colonial rule.",
    },
    {
      question: "What is the total area of India?",
      options: ["3.287 million square km", "3.287 million square miles", "2.897 million square km", "4.500 million square km"],
      answer: "3.287 million square km",
      explanation: "India's total area is approximately 3.287 million square kilometers, making it the seventh-largest country in the world.",
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Kiran Bedi"],
      answer: "Indira Gandhi",
      explanation: "Indira Gandhi was the first and only female Prime Minister of India, serving from 1966 to 1977 and from 1980 until her assassination in 1984.",
    },
    {
      question: "Who led the Salt March in 1930?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
      answer: "Mahatma Gandhi",
      explanation: "Mahatma Gandhi led the Salt March in 1930 as a non-violent protest against British salt laws in India.",
    },
    {
      question: "Which Indian ruler is known for the administration of the 'Dhamma' policy?",
      options: ["Ashoka", "Chandragupta Maurya", "Akbar", "Sher Shah Suri"],
      answer: "Ashoka",
      explanation: "Emperor Ashoka of the Maurya Dynasty is known for promoting the policy of 'Dhamma' (moral law) and spreading Buddhism.",
    },
    {
      question: "Who was the first Emperor of the Maurya Dynasty?",
      options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Bimbisara"],
      answer: "Chandragupta Maurya",
      explanation: "Chandragupta Maurya was the founder of the Maurya Empire and its first Emperor.",
    },
    {
      question: "In which year did the first Indian satellite, Aryabhata, launch?",
      options: ["1972", "1975", "1980", "1984"],
      answer: "1975",
      explanation: "India's first satellite, Aryabhata, was launched on April 19, 1975, by the Soviet Union from its cosmodrome.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);
  const [confettiArray, setConfettiArray] = useState([]);

  useEffect(() => {
    if (timer > 0 && selectedOption === null && !quizFinished) {
      const countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(countdown);
    } else if (timer === 0 && selectedOption === null && !quizFinished) {
      // Automatically go to the next question when time runs out
      handleNextQuestion();
    }
  }, [timer, selectedOption, quizFinished]);
  

  useEffect(() => {
    if (quizFinished) {
      const confetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 2 + 1}s`,
          animationDelay: `${Math.random()}s`,
        },
      }));
      setConfettiArray(confetti);
    }
  }, [quizFinished]);

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
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
    setTimer(0);
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
        {!quizFinished && (
          <div className="question-card p-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white shadow-xl w-full">
            <h2 className="question text-xl mb-4">
              Question {currentQuestion + 1}: {questions[currentQuestion].question}
            </h2>

            <div className="options-container grid grid-cols-2 gap-4 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button relative w-full p-4 bg-white text-gray-700 rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl ${selectedOption
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
        )}

        {/* Thank You for Visiting Section */}
        {quizFinished && (
          <>
            <div className="quiz-result">
              <p className="score">Your Final Score: {score} / {questions.length}</p>
              <p className="thank-you">Thank you for visiting!</p>
            </div>
            {confettiArray.map((confetti) => (
              <div key={confetti.id} className="confetti" style={confetti.style}></div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Ques;
