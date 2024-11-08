import React from 'react'
import img1 from './../Assets/ca12.jpg'
import img2 from './../Assets/ca16.jpg'
import img3 from './../Assets/ca6.webp'
function Carousel() {
    return (
        <div className="bg-black">

<div className="relative h-screen overflow-hidden">
    <img src={img1} alt="Image 1" className="absolute inset-0 w-full h-full object-cover carousel-image opacity-100" />
    <img src={img2} alt="Image 2" className="absolute inset-0 w-full h-full object-cover carousel-image opacity-0" />
    <img src={img3} alt="Image 3" className="absolute inset-0 w-full h-full object-cover carousel-image opacity-0" />
</div>

{/* Text overlay */}
<div className="absolute inset-0 flex justify-center items-center text-white text-overlay">
  <div className="text-center">
      <h1 className="text-7xl font-bold font-mono mb-4">INDIA</h1>
      <p className="text-2xl"> <b>with it's Rich Culture and Tradition </b> </p>
  </div>
</div>

<script>
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function changeImage() 
        images[currentIndex].classList.remove('opacity-100');
        images[currentIndex].classList.add('opacity-0');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.remove('opacity-0');
        images[currentIndex].classList.add('opacity-100');
    

    setInterval(changeImage, 3000); // Change image every 3 seconds
</script>



        </div>
        
        
    )
}
export default Carousel 


