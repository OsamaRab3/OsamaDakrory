
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.project-carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        const width = document.querySelector('.project').offsetWidth;
        carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        const totalProjects = document.querySelectorAll('.project').length;
        if (currentIndex < totalProjects - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

});

 
  

