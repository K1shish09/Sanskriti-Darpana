// import React from 'react'
import Slidercard from '../components/Slidercard'
import line from './../Assets/Gold_Decoration_Transparent_PNG_Clip_Art.png'
import holi from './../Assets/holi.jpg'
import fort from './../Assets/fort.jpg'
import music from './../Assets/music.jpg'
import dance from './../Assets/folkdance.jpg'
import languages from './../Assets/languages.jpg'
import flora from './../Assets/flora.jpg'
import fauna from './../Assets/fauna.jpg'
import food from './../Assets/food.jpg'
import tabla from './../Assets/tabla.jpg'
import mahal1 from './../Assets/mahal1.jpg'
import monuments from './../Assets/monuments.jpg'
import h1 from './../Assets/Gommateshwara statue.jpg'
import h2 from './../Assets/Hampi.jpg'
import h3 from './../Assets/Golden temple pics.jpg'
import h4 from './../Assets/Khajuraho, .jpg'
import h5 from './../Assets/Konark Sun Temple .jpg'
import h6 from './../Assets/Worlds first University.jpg'
import h7 from './../Assets/Taj Mahal.jpg'
import Cardslider from '../components/Cardslider'
import React, { useState } from "react";
import './Home.css'


function Home() {
 
    const [activeIndex, setActiveIndex] = useState(null); // Track which panel is active
  
    const panels = [
      { title: "Gomateshwar Temple - Karnataka", bg: h1 },
      { title: "Hampi - Karnataka", bg: h2 },
      { title: "Harmandir Sahib Golden Temple - Punjab", bg: h3 },
      { title: "Khajuraho - Madhya Pradesh", bg: h4 },
      { title: "Konark Sun Temple - Odisha", bg: h5 },
      { title: "Nalanda - Bihar", bg: h6 },
      { title: "Taj Mahal - Uttar Pradesh", bg: h7 },
    ]





  return (
    <>
      {/* <Navbar /> */}

      {/* slider */}
      <div className='imgslider'>
        <h1 className="img-text">INDIA</h1><br></br>
        <p className="img-text">Experince the Rich Culture and Heritage !</p><br></br>
      </div>

    
    {/* slider end */}
    <img src={line} alt="" className="h-14 w-96 mt-[90px] mx-auto mb-10 sm:w-72 sm:mt-10"  />
    <br></br>
    <h2 className="text-center font-bold bg-red-600 bg-gradient-to-br from-pink-500 via-red-600  text-3xl text-white
    mx-1 sm:mx-8 md:mx-4 lg:mx-[600px] my-6 sm:text-2xl md:text-3xl lg:text-4xl rounded-lg shadow-4xl css">
    Search For
</h2>

<br></br><br></br>
      <div className="container">
    <div className="photo-gallary">
      <div class="column">
    <div className="photo"><img src={food} className=""/>
    <div class="text-container"> <h3 className='text-white'>Traditional Food</h3></div></div>
    <div className="photo"><img src={fort} className=""/>
    <div class="text-container"> <h3 className='text-white'>Historical Sites</h3></div></div>
    <div className="photo"><img src={music} className=""/>
    <div class="text-container"> <h3 className='text-white'>Folk Music</h3></div></div>
    </div>
    <div class="column">
    <div className="photo"><img src={flora} className=""/>
    <div class="text-container"> <h3 className='text-white'>Flora</h3></div></div>
    <div className="photo"><img src={fauna} className=""/>
    <div class="text-container"> <h3 className='text-white'>Fauna</h3></div></div>
    <div className="photo"><img src={tabla} className=""/>
    <div class="text-container"> <h3 className='text-white'>Instruments</h3></div></div>
    <div className="photo"><img src={mahal1} className=""/>
    <div class="text-container"> <h3 className='text-white'>Monuments</h3></div></div>
    </div>
    <div class="column">
    <div className="photo" ><img src={holi} className=""/>
     <div class="text-container"> <h3 className='text-white'>Festivals</h3></div></div>
    <div className="photo"><img src={dance} className=""/>
    <div class="text-container"> <h3 className='text-white'>Folk Dance</h3></div></div>
    <div className="photo"><img src={languages} className=""/>
    <div class="text-container"> <h3 className='text-white'>Languages </h3></div></div>
    </div>
    </div>
    </div>  

  


    <br></br><br></br>
    <img src={line} alt="" className="h-14 w-96 mt-[90px] mx-auto mb-10 sm:w-72 sm:mt-10"  />
    <br></br>
    <h2 className="text-center font-bold bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 text-2xl text-white
    mx-4 sm:mx-8 md:mx-16 lg:mx-[400px] my-6 sm:text-2xl md:text-3xl lg:text-4xl rounded-lg shadow-4xl css">
    UNESCO World Heritage Sites
    </h2><br></br><br></br>

    
      <div className='monuments'>
      <img src={monuments} className='image'/>
      <div className="text-container-1"> <h3 className="text-white ">List of UNESCO</h3>
        <h1 className="text-white text-5xl ml-64 ">  WORLD HERITAGE SITES</h1>
        <p className="text-white ml-96">Till 2024</p>
      </div>
      <button className='text-container-button bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600'><a href="/Unesco">Read More</a></button>
    </div>   
 





    <br></br><br></br>
    <img src={line} alt="" className="h-14 w-96 mt-[90px] mx-auto mb-10 sm:w-72 sm:mt-10"  />
    <br></br>
    <h2 className="text-center font-bold bg-red-600 bg-gradient-to-br from-pink-500 via-red-600  text-2xl text-white
    mx-1 sm:mx-8 md:mx-4 lg:mx-[400px] my-6 sm:text-2xl md:text-3xl lg:text-4xl rounded-lg shadow-4xl css">
    Greatest Innovation of India
</h2>
         
    <Slidercard/>
    <br></br>
    <img src={line} alt="" className="h-14 w-96 mt-[90px] mx-auto mb-10 sm:w-72 sm:mt-10"  /><br></br>
    <h2 className="text-center font-bold bg-red-600 bg-gradient-to-br from-pink-500 via-red-600  text-2xl text-white
    mx-1 sm:mx-8 md:mx-4 lg:mx-[500px] my-6 sm:text-2xl md:text-3xl lg:text-4xl rounded-lg shadow-4xl css">
    7 Wonders of India</h2><br></br>
     <div className="container-panel1">
      {panels.map((panel2, index) => (
        <div
          key={index}
          className={`panel2 ${activeIndex === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${panel2.bg})`,
          }}
          onClick={() => setActiveIndex(index === activeIndex ? null : index)} // Toggle panel
        >
          <h3>{panel2.title}</h3>
        </div>
      ))}
    </div>
      
    <img src={line} alt="" className="h-14 w-96 mt-[90px] mx-auto mb-10 sm:w-72 sm:mt-10"  />
    

<br></br>
  

<h2 className="text-center font-bold bg-red-600 bg-gradient-to-br from-pink-500 via-red-600  text-2xl text-white
    mx-1 sm:mx-8 md:mx-4 lg:mx-[400px] my-6 sm:text-2xl md:text-3xl lg:text-4xl rounded-lg shadow-4xl css">
    Greatest Innovation of India
</h2>
    <Cardslider/>
 
 <br></br>

     {/* end */}
    <h1 className="text-shadow ">Learning is Easy with <span className="span">S</span >anskriti<span className="span">D</span>arpan !</h1>
    <br></br><br></br>
    <img src={line} alt="" className="h-14 w-96 mt-[90px] mx-auto mb-10 sm:w-72 sm:mt-10"  />
    <br></br><br></br>
  {/* <Footer/> */}
   </>
  )
}

export default Home

