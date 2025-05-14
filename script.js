const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalItems = items.length;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    items.forEach((item, index) => {
        const offset = index - currentIndex;

        item.style.transform = `
      perspective(1000px)
      rotateY(${offset * 30}deg)
      scale(${Math.max(1 - Math.abs(offset) * 0.2, 0.8)})
    `;
        item.style.opacity = offset === 0 ? '1' : '0.5';
        item.style.zIndex = 10 - Math.abs(offset);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

// Swipe mobile support
let startX = 0;
track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});
track.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (diff > 50) {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    } else if (diff < -50) {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
});

updateCarousel();
