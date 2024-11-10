import React from 'react'
import Navbar from './../components/Navbar'
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
import './Home.css'
import Footer from './../components/Footer'
import surgery from './../Assets/surgery.jpg'
import indus from './../Assets/indusvalley.jpg'
import stepwell from './../Assets/stepwell.jpg'

function Home() {
  return (
    <>
    <Navbar/>

    {/* slider */}
   <div className='imgslider'>
   
    <h1 className="img-text">INDIA</h1><br></br>
    <p className="img-text">Experince the Rich Culture and Heritage !</p><br></br>
    
    
   </div>

    
    {/* slider end */}

    <img src={line} alt="" className="h-14 mt-[90px] w-96 ml-[550px] mb-10"  />
    <br></br>
    <h2 className="text-center font-bold bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 text-3xl text-white
    ml-[600px] mr-[600px] rounded-lg shadow-4xl">Search For</h2><br></br><br></br>
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
     <div className="photo" ><img src={holi} className=""/>
     <div class="text-container"> <h3 className='text-white'>Festivals</h3></div></div>
    <div className="photo"><img src={dance} className=""/>
    <div class="text-container"> <h3 className='text-white'>Folk Dance</h3></div></div>
    <div className="photo"><img src={languages} className=""/>
    <div class="text-container"> <h3 className='text-white'>Languages </h3></div></div>
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
    </div>
    </div>

    <br></br><br></br>
    <img src={line} alt="" className="h-14 w-[800px] ml-[350px] mb-10"  />
    <br></br>
    <h2 className="text-center font-bold bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 text-3xl text-white
    ml-[500px] mr-[500px] rounded-lg shadow-4xl ">UNISCO World Heritage Sites</h2><br></br><br></br>
    <div className='monuments'>
      <img src={monuments} className="rounded-lg ml-[400px] w-[700px] h-96 shadow-2xl shadow-black" />
      <div class="text-container-1"> <h3 className="text-white ">List of UNISCO</h3>
        <h1 className="text-white text-5xl ml-64">WORLD HERITAGE SITES</h1>
        <p className="text-white ml-96">Till 2024</p>
      </div>
      <button className='text-container-button bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600'><a href="">Read More</a></button>
    </div>
    <br></br><br></br>
    <img src={line} alt="" className="h-14 w-[800px] ml-[350px] mb-10"  />
    <br></br>
    <h2 className="text-center font-bold bg-red-600 bg-gradient-to-tr from-red-700 to-pink-600 text-3xl text-white
    ml-[500px] mr-[500px] rounded-lg shadow-4xl ">Greatest Innovation of India</h2><br></br><br></br>
    <div className="slide-container">
      <div className="slide-wrapper">
        <div className="card_area">
          <div className="card">
            <img src={surgery} />
            <div className="overlay">
              <h3>Wireless Communication</h3>
              <p>Indian scientist Jagadish Chandra Bose was one of the pioneers of wireless communication. In 1895, he demonstrated the transmission of 
                electromagnetic waves over a distance, a few years before Marconi’s work, and contributed foundational concepts in radio and microwave optics.</p>
            </div>
          </div>
          <div className="card">
            <img src={indus} />
            <div className="overlay">
              <h3>Wireless Communication</h3>
              <p>Indian scientist Jagadish Chandra Bose was one of the pioneers of wireless communication. In 1895, he demonstrated the transmission of 
                electromagnetic waves over a distance, a few years before Marconi’s work, and contributed foundational concepts in radio and microwave optics.</p>
            </div>
          </div>
          <div className="card">
            <img src={stepwell} />
            <div className="overlay">
              <h3>Wireless Communication</h3>
              <p>Indian scientist Jagadish Chandra Bose was one of the pioneers of wireless communication. In 1895, he demonstrated the transmission of 
                electromagnetic waves over a distance, a few years before Marconi’s work, and contributed foundational concepts in radio and microwave optics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
		
     {/* end */}
    <h1 className="text-shadow">Learning is Easy with <span className="span">S</span >anskriti<span className="span">D</span>arpan !</h1>
    <br></br><br></br>
    <img src={line} alt="" className="h-14 w-[800px] ml-[350px] mb-10"  />
    <br></br><br></br>
    <Footer/>
    </>
  )
}

export default Home

