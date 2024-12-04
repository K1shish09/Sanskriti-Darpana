import React from 'react';
import reviewImg from './../Assets/review logo.jpeg'
import profileImg from './../Assets/profile.png'

function App() {
  return (
    <div>
      {/* Reviews Section */}
      <div className="h-screen w-full bg-gradient-to-r from-pink-500 to-red-500">
        <div className="flex h-full w-full p-20">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-12">REVIEWS</h1>
            <p className="text-lg text-white"> “Thank you, [Sanskriti Darpan], for helping my son get his 1st Rank. I know it wasn’t easy, but you made it happen. <br></br>I will definitely be coming back to your website when it’s time for my daughter to get her 1st Rank.” It is very Informative. First Time I felt as ease to collect each States information in Same Website. <br></br> <br></br> Great read !! Well Done !! Very relevant , Knowledgeable and Professional Webite👍👍 </p>
          </div>
          <div className="w-1/10">
            <img src={reviewImg} alt="Review Image" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>

      {/* Gap between sections */}
      <div className="h-20 md:h-10 lg:h-5"></div>

      {/* Testimonials Section */}
      <div className="h-screen w-full bg-white">
        <div className="flex flex-col items-center justify-center h-full p-8">
          <h1 className="text-4xl font-bold text-white mb-8 rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg bg-gradient-to-r from-red-500 to-pink-500 px-8 py-2"> TESTIMONIALS </h1>
          <h2 className="text-2xl font-bold text-white mb-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2"> What Our User's Say </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-8">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-10 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <img src={profileImg} alt="User Avatar" className="h-20 w-20 rounded-full object-cover object-center mb-4" />
                <p className="text-lg text-white mb-4"> "I've never seen such an amazing platform! It's so easy to use and the features are incredible😊." </p>
                <h3 className="text-xl font-bold text-white">Pranay Roy</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-8">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-10 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <img src={profileImg} alt="User Avatar" className="h-20 w-20 rounded-full object-cover object-center mb-4" />
                <p className="text-lg text-white mb-4"> "Very friendly & Awesome explaination of Indian Culture & Heritage. Thankyou❤️[Sanskriti Darpan]." </p>
                <h3 className="text-xl font-bold text-white">Sakshi Singh</h3>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-8">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-10 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <img src={profileImg} alt="User Avatar" className="h-20 w-20 rounded-full object-cover object-center mb-4" />
                <p className="text-lg text-white mb-4"> "This platform has changed my life! The support team is amazing and always helpful👍." </p>
                <h3 className="text-xl font-bold text-white">Karan Garg</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;