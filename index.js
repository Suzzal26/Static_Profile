document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const carouselImages = carousel.querySelector('.carousel-images');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        nextBtn.addEventListener('click', () => {
            carouselImages.scrollBy({ left: 200, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carouselImages.scrollBy({ left: -200, behavior: 'smooth' });
        });
    });
});
