import React from 'react';
import img1 from './../Assets/kashish.jpg';
import img2 from './../Assets/prerna.jpg';
import img3 from './../Assets/vaishnavi.jpg';
import img4 from './../Assets/Tanvi.jpg';




function AboutUs() {
  return (
    <>

      <Navbar />
      <div className="bg-gray-100 flex flex-col items-center min-h-screen">
        {/* Heading */}
        <h2 className="text-center font-bold bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 text-3xl text-white mt-32 mx-4 sm:mx-8 md:mx-16 lg:mx-96 my-6 sm:text-2xl md:text-3xl lg:text-4xl rounded-lg shadow-lg p-4">
          Team Members
        </h2>

        {/* Cards */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-lg shadow-md p-6 flex flex-col items-center bg-gradient-to-tr from-red-700 to-pink-600 text-white">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                <img src={img1} alt="User 1" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Kashishr</h3>
              <p className="mt-2 text-sm text-gray-200 text-center">
                A passionate Web Developer with a love for coding and design. She is a dedicated B.Sc. IT student with a talent for creativity and precision. Her expertise shines through in her work, especially when she designs and develops captivating review pages.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg shadow-md p-6 flex flex-col items-center bg-gradient-to-tr from-red-700 to-pink-600 text-white">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                <img src={img2} alt="User 2" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Prerna Barde</h3>
              <p className="mt-2 text-sm text-gray-200 text-center">
                Prerna, a dedicated B.Sc. IT student with a talent for creativity and precision. Her expertise shines through in her work, especially when she designs and develops captivating home pages and components.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg shadow-md p-6 flex flex-col items-center bg-gradient-to-tr from-red-700 to-pink-600 text-white">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                <img src={img3} alt="User 3" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Vaishnavi Ambatre</h3>
              <p className="mt-2 text-sm text-gray-200 text-center">
                She is a dedicated B.Sc. IT student with a talent for creativity and precision. Her expertise shines through in her work, especially when she designs and develops captivating review pages.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg shadow-md p-6 flex flex-col items-center bg-gradient-to-tr from-red-700 to-pink-600 text-white">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                <img src={img4} alt="User 4" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Tanvi Barbate</h3>
              <p className="mt-2 text-sm text-gray-200 text-center">
                A passionate Web Developer with a love for coding and design. She is also a good UI/UX designer.
              </p>
            </div>
          </div>
        </div>
      </div>





    </>
  );
}

export default AboutUs;