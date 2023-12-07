
gsap.to(".circle-ani", {
    rotate: "180deg",
    // duration: "2s",
    scrollTrigger: {
      trigger: ".circle-ani",
      start: "top bottom", // When the top of .your-trigger reaches the center of the viewport
      end: "top top", // When the bottom of .your-trigger reaches the center of the viewport
      scrub: 3, // Smoothly animate the property changes
    //   markers: true // Add markers for visualization (optional)
    }
  });




let currentIndex = 0;
const sliderWrapper = document.getElementById('sliderWrapper');
const totalSlides = document.querySelectorAll('.slider').length;

function showSlide(index) {
    console.log(index)
    const translateValue = -index * 100 + '%';
    console.log(translateValue)
    sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}


// let currentIndex = 0;
// const sliderContainer = document.getElementById('sliderContainer');
// const sliderWrapper = document.getElementById('sliderWrapper');
// const cardWidth = document.querySelector('.slider').offsetWidth;

// function showSlide(index) {
//     const scrollValue = index * cardWidth;
//     sliderContainer.scrollLeft = scrollValue;
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % sliderWrapper.childElementCount;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + sliderWrapper.childElementCount) % sliderWrapper.childElementCount;
//     showSlide(currentIndex);
// }
