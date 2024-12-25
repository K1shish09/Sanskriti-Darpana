import React from 'react';
import Navbar from '../components/Navbar';

// import reviewImg from './../Assets/review-logo.jpeg';
import profileImg from './../Assets/profile.png';

const Review = () => {
  return (
    <>
      <div className="relative">
        <Navbar />

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white overflow-hidden">
          {/* Background Parallax Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-60 animate__animated animate__fadeIn"></div>

          {/* Abstract Floating Elements */}
          <div className="absolute inset-0 flex justify-between items-center opacity-30">
            <div className="bg-pink-300/50 w-72 h-72 rounded-full animate-pulse"></div>
            <div className="bg-yellow-400/60 w-60 h-60 rounded-full animate-bounce"></div>
            <div className="bg-red-500/50 w-40 h-40 rounded-full animate-ping"></div>
          </div>

          {/* Content Section */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300 mb-6 shadow-md animate__animated animate__fadeInUp">
              Discover User Experiences
            </h1>
            <p className="text-lg max-w-3xl mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Join the many who have explored India's rich heritage through Sanskriti Darpan. Hear their stories and experiences!
            </p>

            {/* CTA Button with Hover Effect */}
            <a
              href="#reviews"
              className="inline-block bg-white text-pink-500 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:bg-pink-100 animate__animated animate__zoomIn animate__delay-2s"
            >
              Read Reviews
            </a>
          </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-16">
              What Our Users Say
            </h2>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: 'Priya Sharma', title: 'Heritage Explorer', review: 'Sanskriti Darpan is a one-stop platform for learning about Indian culture. Highly recommended!' },
                { name: 'Ayesha Khan', title: 'UPSC Aspirant', review: 'I have learned so much about India’s rich traditions. Sanskriti Darpan is my go-to source for cultural knowledge!' },
                { name: 'Manish Kumar', title: 'Student', review: 'Amazing platform! It offers deep insights into Indian heritage that you won’t find anywhere else.' },
                { name: 'Sakshi Gupta', title: 'Student', review: 'Sanskriti Darpan made learning about Indian festivals and customs so much fun and easy!' },
                { name: 'Ravi Mehta', title: 'Traditional Art Lover', review: 'A great way to explore the diverse cultures of India. I love the engaging content and beautiful presentation!' },
                { name: 'Karan Verma', title: 'Cultural Student', review: 'An invaluable resource for anyone interested in Indian history and culture. Very informative and well-designed !' }
              ].map((review, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-red-500 to-pink-500 text-white backdrop-blur-lg rounded-xl shadow-2xl transform transition-all duration-300"
                >
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Verified User
                  </div>

                  {/* Card Content */}
                  <div className="p-6 text-center">
                    {/* User Avatar */}
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <img
                        src={profileImg}
                        alt="User"
                        className="w-full h-full rounded-full border-4 border-pink-500 shadow-lg"
                      />
                    </div>
                    {/* User Info */}
                    <h3 className="text-xl font-bold">{review.name}</h3>
                    <p className="text-sm text-gray-100 mb-4">{review.title}</p>
                    {/* Review Text */}
                    <p className="italic text-gray-100 mb-4 font-serif">
                      "{review.review}"
                    </p>
                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.425 8.2 1.192-5.917 5.774 1.396 8.122L12 18.897l-7.348 3.878 1.396-8.122L.13 9.204l8.2-1.192z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thank You Message Section */}
        <div className="bg-white py-15">
          <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-700">
            " Thank You for Choosing Sanskriti Darpan 🙏 ! "
          </h2>
        </div>

      </div>
    </>
  )
}

export default Review