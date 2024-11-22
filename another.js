document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let scrollAmount = 0;

    nextBtn.addEventListener('click', () => {
        carouselImages.scrollBy({ left: 200, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carouselImages.scrollBy({ left: -200, behavior: 'smooth' });
    });
});
