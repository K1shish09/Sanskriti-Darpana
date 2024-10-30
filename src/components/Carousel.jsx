import React from 'react'

function carsousel() {
    return (
        <div>
<body class="bg-black">

<div class="relative h-screen overflow-hidden">
    <img src="ca12.jpg" alt="Image 1" class="absolute inset-0 w-full h-full object-cover carousel-image opacity-100" />
    <img src="ca6.webp" alt="Image 2" class="absolute inset-0 w-full h-full object-cover carousel-image opacity-0" />
    <img src="ca16.jpg" alt="Image 3" class="absolute inset-0 w-full h-full object-cover carousel-image opacity-0" />
</div>

{/* Text overlay */}
<div class="absolute inset-0 flex justify-center items-center text-white text-overlay">
  <div class="text-center">
      <h1 class="text-7xl font-bold font-mono mb-4">INDIA</h1>
      <p class="text-2xl"> <b>with it's Rich Culture and Tradition </b> </p>
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

</body>

        </div>
        
        
        
        
    )
}
export default carousel 


